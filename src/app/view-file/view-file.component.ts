import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-file',
  templateUrl: './view-file.component.html',
  styleUrls: ['./view-file.component.scss']
})
export class ViewFileComponent implements OnInit{

  Spreadsheet: []|any = [];
  constructor(
    private router: Router,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    let getExcel:any = localStorage.getItem('excel');
    let readSpreadsheet = JSON.parse(getExcel);
    this.Spreadsheet = readSpreadsheet;
  }

  routeBack(){
    window.history.go(-1);
    localStorage.removeItem('excel');
  }

  routeToUploads(){
    this.router.navigate(['/fileUploads'], {relativeTo: this.route});
    localStorage.removeItem('excel');
  }
}
