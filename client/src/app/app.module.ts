import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { appMaterial } from './appMaterial';
import { RegisterComponent } from './component/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { DashboardComponent } from './component/dashboard/dashboard.component';
import { HttpServiceService } from './services/httpService/http-service.service';
import { UserServiceService } from './services/user-service.service';

import { MatDialogModule } from '@angular/material/dialog';
import { ImageCropperModule } from 'ngx-image-cropper';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    // FormControl,
    FormsModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    appMaterial,
    BrowserAnimationsModule,
    MatFormFieldModule,
    HttpClientModule,
    MatDialogModule,
    ImageCropperModule,

  ],
  providers: [
    HttpServiceService,
    UserServiceService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
