import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GridStudentComponent } from './grid-student/grid-student.component';
import { AddOrUpdateStudentComponent } from './add-or-update-student/add-or-update-student.component';
import { StudentService } from './student.service';
import * as _ from 'lodash';


//Adding rounting for the application
const appRoutes: Routes = [
  { path: '', component: HomeComponent }
 
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GridStudentComponent,
    AddOrUpdateStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    //Adding rounting for the application
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [
    StudentService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
