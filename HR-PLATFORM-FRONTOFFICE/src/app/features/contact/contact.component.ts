import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contact = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit() {
    console.log('Formulaire envoyé ✅', this.contact);
    alert('Merci pour votre message, nous vous répondrons bientôt !');
    this.contact = { name: '', email: '', message: '' }; // reset
  }

}
