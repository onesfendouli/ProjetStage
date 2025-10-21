import {Component, ViewChild} from '@angular/core';
import {AuthModalComponent} from "../auth/auth-modal/auth-modal.component";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  jobs = [
    {
      title: 'Développeur Frontend',
      location: 'Tunis',
      image: 'job-tech.jpeg',
      company: 'TechCorp',
      type: 'Full-time',
      experience: '2-4 ans',
      salary: '1500 - 2000 TND'
    },
    {
      title: 'Marketing Manager',
      location: 'Sfax',
      image: 'job-marketing.png',
      company: 'MarketPlus',
      type: 'Full-time',
      experience: '3-5 ans',
      salary: '1800 - 2500 TND'
    },
    {
      title: 'UX Designer',
      location: 'Sousse',
      image: 'job-design.jpg',
      company: 'DesignHub',
      type: 'Contract',
      experience: '1-3 ans',
      salary: '1200 - 1800 TND'
    }
  ];

  @ViewChild('authModal') authModal!: AuthModalComponent;
  loginOpen = false;
  isLoginForm = true; // true = login, false = sign up

// Ouvrir le formulaire Login
  openLogin() {
    this.isLoginForm = true;
    this.loginOpen = true;
  }

// Ouvrir directement le formulaire Sign Up
  openSignUp() {
    this.isLoginForm = false;
    this.loginOpen = true;
  }

// Fermer la modal
  closeLogin() {
    this.loginOpen = false;
  }


  // Exemple de valeurs
  values = [
    { title: 'Collaboration', description: 'Un environnement où chaque talent compte.', image: 'value-collaboration.jpg' },
    { title: 'Carrière', description: 'Des opportunités pour évoluer.', image: 'value-career.jpg' },
    { title: 'Performance', description: 'Une plateforme axée sur la réussite.', image: 'value-performance.jpg' }
  ];
  isModalOpen = false;
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      birthDate: ['', Validators.required],
      country: ['', Validators.required],
      phone: ['', Validators.required],
      education: ['', Validators.required],
      experience: ['', Validators.required],
      password1: ['', Validators.required],
      password2: ['', Validators.required],
      cv: [''],
      jobAlerts: [false],
      partnerOffers: [false]
    });
  }

  openApplyModal(job: any) {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  submitForm() {
    if (this.registrationForm.valid) {
      console.log(this.registrationForm.value);
      alert('Inscription complétée !');
      this.registrationForm.reset();
      this.closeModal();
    }
  }


}
