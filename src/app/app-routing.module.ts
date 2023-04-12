import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileUploadsComponent } from './file-uploads/file-uploads.component';
import { TableComponent } from './table/table.component';
import { ViewFileComponent } from './view-file/view-file.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'FileUploads' },
  {path: 'FileUploads', component: FileUploadsComponent},
  {path: 'Table', component: TableComponent},
  {path: 'ViewFileUploaded', component: ViewFileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
