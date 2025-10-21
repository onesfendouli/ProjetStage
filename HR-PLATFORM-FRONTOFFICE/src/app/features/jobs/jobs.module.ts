import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobsRoutingModule } from './jobs-routing.module';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ListComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    JobsRoutingModule,
    FormsModule,
    ReactiveFormsModule, // pour ngModel dans la recherche

  ]
})
export class JobsModule { }
