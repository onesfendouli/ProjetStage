import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListRolesComponent} from "../roles/list-roles/list-roles.component";
import {ListCvComponent} from "./list-cv/list-cv.component";
import {ViewCvComponent} from "./view-cv/view-cv.component";

const routes: Routes = [
  { path: '', component:ListCvComponent },
  { path: 'view', component: ViewCvComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CvsRoutingModule { }
