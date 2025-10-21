import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AuthModule} from "../auth/auth.module";
import {SharedModule} from "../../shared/shared.module";

  @NgModule({
    declarations: [
      HomeComponent

    ],
    imports: [
      CommonModule,
      HomeRoutingModule,
      FormsModule,
      AuthModule,
      ReactiveFormsModule,
      SharedModule
    ]
  })
export class HomeModule { }
