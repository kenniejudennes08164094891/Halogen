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

export const imageAssets = {
  bgImage: '/assets/images/FBNQuest.png'
}

export const accountOptions = [
  {
    option: 'Talent Signup',
    matIcon: 'build',
    route: '/talent/talent-signup',
    param: 'talent_onboarding'
  },
  {
    option: 'Scouter Signup',
    matIcon: 'credit_card',
    route: '/scouter/scouter-signup',
    param: 'scouter_onboarding'
  }
]
