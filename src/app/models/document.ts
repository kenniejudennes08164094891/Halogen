export class Document {
  constructor(
    public fileName: string,
    public fileSize: number,
    public fileType: string,
    public document: string,
    public viewDocument: string
  ){}
}


export interface DocumentInterface{
   fileName: string,
   fileSize: number,
   fileType: string,
   document: string,
   viewDocument: string
}
