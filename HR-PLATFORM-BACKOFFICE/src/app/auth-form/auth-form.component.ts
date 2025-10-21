import { Component } from '@angular/core';


@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent {
  // Sign In
  signInData = {
    username: '',
    password: ''
  };

  // Sign Up
  signUpData = {
    firstname: '',
    lastname: '',
    dateOfBirth: '',
    email: '',
    password: ''
  };

  // Fonctions
  signIn() {
    console.log('Sign In data:', this.signInData);
    // ici tu appelles ton backend
  }

  signUp() {
    console.log('Sign Up data:', this.signUpData);
    // ici tu appelles ton backend
  }
}
