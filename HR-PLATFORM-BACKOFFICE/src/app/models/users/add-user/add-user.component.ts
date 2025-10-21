import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  user: any = {};

  avatarOptions: string[] = [
    'https://bootdey.com/img/Content/avatar/avatar1.png',
    'https://bootdey.com/img/Content/avatar/avatar2.png',
    'https://bootdey.com/img/Content/avatar/avatar3.png',
    'https://bootdey.com/img/Content/avatar/avatar4.png',
    'https://bootdey.com/img/Content/avatar/avatar7.png'
  ];

  constructor(public router: Router) {}

  onSubmit() {
    // Validation simple côté front
    if (!this.user.firstname || !this.user.lastname || !this.user.email || !this.user.role || !this.user.dateOfBirth || !this.user.password) {
      alert('Veuillez remplir tous les champs obligatoires !');
      return;
    }
    console.log('Utilisateur ajouté :', this.user);
    alert('Utilisateur ajouté avec succès !');
    this.router.navigate(['/users/list']);
  }

  goBack() {
    this.router.navigate(['/users/list']);
  }

}
