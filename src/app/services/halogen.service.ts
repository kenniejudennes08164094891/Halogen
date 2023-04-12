import { Injectable } from '@angular/core';
import { map, Observable, Subject } from 'rxjs';
import {  DocumentInterface } from '../models/document';
import { Document } from '../models/document';

@Injectable({
  providedIn: 'root'
})
export class HalogenService {

 private document$ = new Subject<any>();
 documentArray: Document[] = [];

  constructor() { }

  public setDocumentObj(document: DocumentInterface){
    this.document$.next(document);
  }

  public getDocumentObj(): Observable<any>{
    return this.document$.asObservable();
  }

  public setDocument(document: Document){
    return this.documentArray.push(document);
  }

  public getDocument(){
    return this.documentArray;
  }
}
