import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RoleDetailsComponent} from "./role-details/role-details.component";
import {AddRoleComponent} from "./add-role/add-role.component";
import {ListRolesComponent} from "./list-roles/list-roles.component";


const routes: Routes = [
  { path: '', component:ListRolesComponent },
  { path: 'details/:id', component: RoleDetailsComponent },
  { path: 'add', component: AddRoleComponent },
  { path: 'edit/:id', component: RoleDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RolesRoutingModule { }
