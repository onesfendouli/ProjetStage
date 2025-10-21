import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CvsRoutingModule } from './cvs-routing.module';
import { ListCvComponent } from './list-cv/list-cv.component';
import { ViewCvComponent } from './view-cv/view-cv.component';



@NgModule({
  declarations: [
    ListCvComponent,
    ViewCvComponent,

  ],
  imports: [
    CommonModule,
    CvsRoutingModule,

  ]
})
export class CvsModule { }
