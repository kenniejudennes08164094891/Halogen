import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileUploadsComponent } from './file-uploads/file-uploads.component';
import { TableComponent } from './table/table.component';
import { ViewFileComponent } from './view-file/view-file.component';
import {AuthComponent} from "./auth/auth.component";
import {WelcomePageComponent} from "./welcome-page/welcome-page.component";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'welcome' },
  {path: 'login', component: AuthComponent},
  {path: 'welcome', component: WelcomePageComponent},
  {path: 'fileUploads', component: FileUploadsComponent},
  {path: 'table', component: TableComponent},
  {path: 'viewFileUploaded', component: ViewFileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
