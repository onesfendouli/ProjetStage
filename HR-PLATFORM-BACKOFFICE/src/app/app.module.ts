import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SharedComponent } from './shared/shared.component';
import { HomeComponent } from './home/home.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AuthFormComponent } from './auth-form/auth-form.component';
import { HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    SharedComponent,
    HomeComponent,
    AuthFormComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
