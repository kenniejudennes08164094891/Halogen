import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Document } from '../models/document';
import { HalogenService } from '../services/halogen.service';
import { Subscription, debounceTime } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit{

  excel: string = "/assets/images/excel.png";
  excel2: string = "/assets/images/excel2.png";
  document: Document[] = [];
  getDocument$!: Subscription;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: HalogenService,
    private toastr: ToastrService
  ){}

  getDocumentObservable(){
    this.getDocument$ = this.service.getDocumentObj().pipe(debounceTime(200)).subscribe({
      next: (response: any) => {
        this.document.push(response);
        console.log("response from service>>", this.document);
      },
      error: (error: any) => {
        console.error("error from service>>", error);
      },
      complete: () => {
        console.info("Table Implementation!");
      }
    })
  }

  getDocumentArray(){
    this.document = this.service.getDocument();
  }


  viewFileUploaded(viewDocument: any){
    console.log("document>>", viewDocument);
    localStorage.setItem('excel', viewDocument);
    this.router.navigate(['/ViewFileUploaded'],{relativeTo: this.route});
  }

  downloadExcelFile(item: Document){
    window.open(item.document,'_blank');
  }

  deleteExcelRow(item: Document){
    this.document.forEach((row: any, index: number) => {
      if(row === item){
        this.document.splice(index, 1);
        this.toastr.success(`row ${index + 1} has been deleted succesfully`)
      }
    })
  }

  backToUploads(){
    this.router.navigateByUrl('/FileUploads')
  }

  ngOnInit(): void {
    this.getDocumentArray();
  }
}
