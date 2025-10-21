import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListEntretiensComponent} from "./list-entretiens/list-entretiens.component";
import {AddEntretienComponent} from "./add-entretien/add-entretien.component";

const routes: Routes = [
  { path: '', component: ListEntretiensComponent },
  { path: 'add', component: AddEntretienComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntretiensRoutingModule { }
