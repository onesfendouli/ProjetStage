import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  jobId!: number;
  job: any;

  // 🔹 Flags pour formulaire et modal
  showApplyForm = false;
  isModalOpen = false;

  registrationForm!: FormGroup;

  constructor(private route: ActivatedRoute, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.jobId = Number(this.route.snapshot.paramMap.get('id'));

    // 🔹 Exemple statique (à remplacer par un API call)
    this.job = {
      id: this.jobId,
      title: 'Développeur Angular',
      company: 'Esprit',
      location: 'Tunis, Tunisie',
      date: '02/10/2025',
      description: 'Nous recherchons un développeur Angular motivé pour rejoindre notre équipe...',
      requirements: [
        'Maîtrise d’Angular',
        'Bonne connaissance de TypeScript',
        'Expérience avec les API REST'
      ]
    };

    // 🔹 Initialisation formulaire modal
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

  // 🔹 Ouvrir le modal
  openModal() {
    this.isModalOpen = true;
  }

  // 🔹 Fermer le modal
  closeModal() {
    this.isModalOpen = false;
  }

  // 🔹 Soumettre le formulaire modal
  submitForm() {
    if (this.registrationForm.valid) {
      console.log('Candidature envoyée :', this.registrationForm.value);
      alert('Merci pour votre candidature !');
      this.closeModal();
      this.registrationForm.reset();
    } else {
      alert('Veuillez remplir tous les champs obligatoires.');
    }
  }
}
