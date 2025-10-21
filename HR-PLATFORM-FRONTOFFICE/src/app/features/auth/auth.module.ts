import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthModalComponent } from './auth-modal/auth-modal.component';

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    AuthModalComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [AuthModalComponent
  ,    LoginComponent]  // pour l’utiliser ailleurs
})
export class AuthModule { }
