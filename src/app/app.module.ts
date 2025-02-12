import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FileUploadsComponent } from './file-uploads/file-uploads.component';
import { TableComponent } from './table/table.component';
import { ViewFileComponent } from './view-file/view-file.component';
import { AlertsComponent } from './alerts/alerts.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ToastrModule } from 'ngx-toastr';
import { AuthComponent } from './auth/auth.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDialogModule} from "@angular/material/dialog";
import {MatMenuModule} from "@angular/material/menu";
import {MatRadioModule} from "@angular/material/radio";

const materialModules = [
  MatSnackBarModule,
  MatCardModule,
  MatIconModule,
  MatButtonModule,
  MatRadioModule,MatMenuModule, MatIconModule,MatCardModule, MatDialogModule, MatSnackBarModule,MatFormFieldModule,MatSelectModule,MatInputModule
]

@NgModule({
  declarations: [
    AppComponent,
    FileUploadsComponent,
    TableComponent,
    ViewFileComponent,
    AlertsComponent,
    AuthComponent,
    WelcomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    materialModules,
    ToastrModule.forRoot({
      timeOut: 3500,
      positionClass: 'toast-top-center',
      preventDuplicates: true,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
