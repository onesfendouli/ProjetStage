import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListJoboffresComponent} from "./list-joboffres/list-joboffres.component";
import {AddJoboffreComponent} from "./add-joboffre/add-joboffre.component";
import {JoboffreDetailsComponent} from "./joboffre-details/joboffre-details.component";

const routes: Routes = [
  {path: '', component:ListJoboffresComponent},
  { path:'add', component: AddJoboffreComponent},
  {path:'details', component:JoboffreDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobOffresRoutingModule { }
