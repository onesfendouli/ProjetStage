import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolesRoutingModule } from './roles-routing.module';
import { ListRolesComponent } from './list-roles/list-roles.component';
import { AddRoleComponent } from './add-role/add-role.component';
import { RoleDetailsComponent } from './role-details/role-details.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ListRolesComponent,
    AddRoleComponent,
    RoleDetailsComponent
  ],
  imports: [
    CommonModule,
    RolesRoutingModule,
    FormsModule,
  ]
})
export class RolesModule { }
