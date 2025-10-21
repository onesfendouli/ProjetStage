import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContactComponent} from "./contact.component";
const routes: Routes = [
  { path: '', component: ContactComponent } // route par défaut du module contact
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
