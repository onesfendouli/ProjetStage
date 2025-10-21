import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrls: ['./auth-modal.component.css']
})
export class AuthModalComponent {
  isModalOpen = false;
  modalType: 'login' | 'register' = 'register';

  registerForm: FormGroup;
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', Validators.required],
      adresse: ['', Validators.required],
      dateNaissance: ['', Validators.required],
      motDePasse: ['', Validators.required],
      confirmMotDePasse: ['', Validators.required]
    });

    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      motDePasse: ['', Validators.required]
    });
  }

  openModal(type: 'login' | 'register') {
    this.modalType = type;
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  switchModal() {
    this.modalType = this.modalType === 'register' ? 'login' : 'register';
  }

  onRegisterSubmit() {
    if (this.registerForm.valid) {
      console.log('Register Data:', this.registerForm.value);
      // Appeler AuthService pour envoyer au backend
    }
  }

  onLoginSubmit() {
    if (this.loginForm.valid) {
      console.log('Login Data:', this.loginForm.value);
      // Appeler AuthService pour envoyer au backend
    }
  }
}
