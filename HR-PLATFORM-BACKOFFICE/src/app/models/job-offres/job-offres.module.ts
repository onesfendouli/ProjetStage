import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobOffresRoutingModule } from './job-offres-routing.module';
import { ListJoboffresComponent } from './list-joboffres/list-joboffres.component';
import { AddJoboffreComponent } from './add-joboffre/add-joboffre.component';
import { JoboffreDetailsComponent } from './joboffre-details/joboffre-details.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ListJoboffresComponent,
    AddJoboffreComponent,
    JoboffreDetailsComponent
  ],
  imports: [
    CommonModule,
    JobOffresRoutingModule,
    FormsModule,
  ]
})
export class JobOffresModule { }
