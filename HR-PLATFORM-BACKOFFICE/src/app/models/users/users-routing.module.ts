import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserDetailsComponent} from "./user-details/user-details.component";
import {AddUserComponent} from "./add-user/add-user.component";
import {ListUsersComponent} from "./list-users/list-users.component";

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' }, // redirige vers /list par défaut
  { path: 'list', component: ListUsersComponent },
  { path: 'add', component: AddUserComponent },
  { path: 'details/:id', component: UserDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
