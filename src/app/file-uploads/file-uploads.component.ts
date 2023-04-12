import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AlertsComponent } from '../alerts/alerts.component';
import { DocumentInterface } from '../models/document';
import { HalogenService } from '../services/halogen.service';
import * as XLSX from 'xlsx';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-file-uploads',
  templateUrl: './file-uploads.component.html',
  styleUrls: ['./file-uploads.component.scss']
})
export class FileUploadsComponent {

  fileSize: number = 0;
  fileName: string = '';
  fileExtension: string = '';
  message: string = "";
  base64Url: string | any = "";
  document: string = "";
  documentObj!: DocumentInterface | any;
  data: [][] = [];
  viewDocument: string = '';
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private snackbar: MatSnackBar,
    private service: HalogenService,
    private toastr: ToastrService
  ) { }


  viewExcelFile(event: any){
    const target: DataTransfer = <DataTransfer>(event.target);
    if(target.files.length !== 1) throw new Error('Cannot use mulltiple files');
    const Reader: FileReader = new FileReader();
    Reader.onload = (elem:any) => {
      const binaryString: string = elem.target.result;
      const workBook:  XLSX.WorkBook = XLSX.read(binaryString, {type: 'binary'});
      const worksheetName: string = workBook.SheetNames[0];
      const workSheet: XLSX.WorkSheet = workBook.Sheets[worksheetName];
      this.data = (XLSX.utils.sheet_to_json(workSheet, {header: 1}));
      this.viewDocument = JSON.stringify(this.data);
    }
    Reader.readAsBinaryString(target.files[0]);
  }

  selectExcelFile(event: any) {
    this.fileSize = event.target.files[0].size / 1000000;
    this.fileName = event.target.files[0].name;
    this.fileExtension = this.fileName.split(".")[1];
    var mimeTypeXLSX = event.target.files[0].type;
    if (
      mimeTypeXLSX.match(/application\/vnd\.openxmlformats\-officedocument\.spreadsheetml\.sheet\/*/) == null) {
      this.message = 'Note that only .xlsx or .xls files are supported!';
      this.toastr.warning(this.message)
      return;
    }

    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);

    reader.onload = (_event: any) => {
      this.message = '';
      this.base64Url = reader.result;
      this.document = this.base64Url.split(",")[1];
    }
  }

  submitToTable() {
    const payload = {
      fileName: this.fileName,
      fileSize: this.fileSize,
      fileType: this.fileExtension,
      document: this.document,
      viewDocument: this.viewDocument
    }
  if(payload.fileType === 'xlsx' || payload.fileType === 'xls' || payload.fileType === 'csv'){
    this.documentObj = payload;
    //this.service.setDocumentObj(this.documentObj)
    this.service.setDocument(this.documentObj);
    this.router.navigate(['/Table'], { relativeTo: this.route });
    this.toastr.success(`${payload.fileType} file has been uploaded succesfully!`)
  }else{
    this.toastr.error('please upload either a xlsx, xls or a csv file')
   // alert('please upload either a xlsx, xls or a csv file')
  }
  }


}
