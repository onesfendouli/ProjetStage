import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListDemandesComponent} from "./list-demandes/list-demandes.component";
import {DemandeDetailsComponent} from "./demande-details/demande-details.component";


const routes: Routes = [
  { path: '', component:ListDemandesComponent },
  {path:"details", component: DemandeDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemandesRoutingModule { }
