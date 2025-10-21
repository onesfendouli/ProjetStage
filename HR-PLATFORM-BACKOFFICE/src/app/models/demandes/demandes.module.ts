import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemandesRoutingModule } from './demandes-routing.module';
import { ListDemandesComponent } from './list-demandes/list-demandes.component';
import { DemandeDetailsComponent } from './demande-details/demande-details.component';


@NgModule({
  declarations: [
    ListDemandesComponent,
    DemandeDetailsComponent
  ],
  imports: [
    CommonModule,
    DemandesRoutingModule
  ]
})
export class DemandesModule { }
