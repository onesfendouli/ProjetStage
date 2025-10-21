import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntretiensRoutingModule } from './entretiens-routing.module';
import { ListEntretiensComponent } from './list-entretiens/list-entretiens.component';
import {AddEntretienComponent} from "./add-entretien/add-entretien.component";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    ListEntretiensComponent,
    AddEntretienComponent
  ],
  imports: [
    CommonModule,
    EntretiensRoutingModule,
    FormsModule,
  ]
})
export class EntretiensModule { }
