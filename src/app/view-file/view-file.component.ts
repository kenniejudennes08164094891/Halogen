import {Component, OnInit, AfterViewInit, Renderer2, ElementRef} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {MatDialog} from "@angular/material/dialog";
import {FileUploadsComponent} from "../file-uploads/file-uploads.component";
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-view-file',
  templateUrl: './view-file.component.html',
  styleUrls: ['./view-file.component.scss']
})
export class ViewFileComponent implements OnInit, AfterViewInit {

  Spreadsheet: [] | any = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private renderer: Renderer2,
    private el: ElementRef,
  ) {
  }

  ngOnInit(): void {
    let getExcel: any = localStorage.getItem('excel');
    let readSpreadsheet = JSON.parse(getExcel);
    this.Spreadsheet = readSpreadsheet;
  }

  ngAfterViewInit(): void {
    const imageElement = this.el.nativeElement.querySelector('#spinner');
    this.renderer.addClass(imageElement, 'hidden');
  }

  convertToPDF(pageId: string, dimension: any, page: string) {
    try {
      const element: any = document.getElementById(pageId);
      html2canvas(element, {
        scrollX: 0,
        scrollY: 0,
        windowWidth: document.documentElement.scrollWidth,
        windowHeight: document.documentElement.scrollHeight
      }).then((canvas: any) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jspdf.jsPDF();
        pdf.addImage(imgData, 'PNG', 0, 0, dimension?.width, dimension?.height); // window.innerWidth, window.innerHeight
        let beneficiaryName = `sample_tax_document_${page}.pdf`;
        pdf.save(beneficiaryName);
      });
    } catch (err) {
      console.error("error from pdf downloads>>", err)
    }
  }


  routeBack() {
    window.history.go(-1);
    localStorage.removeItem('excel');
  }

  routeToUploads() {
    this.dialog.open(FileUploadsComponent)
    // this.router.navigate(['/fileUploads'], {relativeTo: this.route});
    localStorage.removeItem('excel');
  }
}
