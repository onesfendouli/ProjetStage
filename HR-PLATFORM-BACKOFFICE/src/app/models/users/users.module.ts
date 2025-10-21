import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { ListUsersComponent } from './list-users/list-users.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ListUsersComponent,
    AddUserComponent,
    UserDetailsComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
  ]
})
export class UsersModule {

}
