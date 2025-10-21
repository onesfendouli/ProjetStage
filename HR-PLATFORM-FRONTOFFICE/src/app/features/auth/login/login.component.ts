import {Component, EventEmitter, Input, Output} from '@angular/core';
import {AuthService, User} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})export class LoginComponent {
  @Input() isOpen = false;
  @Output() close = new EventEmitter<void>();

  isLogin = true; // true = login, false = sign up
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  birthDate: string = ''; // nouvelle info
  location: string = '';  // nouvelle info

  closeModal() {
    this.close.emit();
  }

  toggleForm() {
    this.isLogin = !this.isLogin;
  }

  onSubmit(event: Event) {
    event.preventDefault();
    if (this.isLogin) {
      console.log('Login:', this.email, this.password);
      alert(`Connexion réussie : ${this.email}`);
    } else {
      console.log('Sign Up:', this.email, this.password, this.confirmPassword, this.birthDate, this.location);
      alert(`Inscription réussie : ${this.email}`);
    }
    this.closeModal();
  }
  constructor(private auth: AuthService, private router: Router) { }

  submitLogin() {
    this.auth.login({} as any); // Le service va mettre l’utilisateur de test
  }
}


