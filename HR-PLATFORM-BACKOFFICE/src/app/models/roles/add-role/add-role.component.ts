import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.css']
})
export class AddRoleComponent {
  role: any = {};

  users = [
    { id: 1, firstname: 'Brooke', lastname: 'Kelly' },
    { id: 2, firstname: 'Ronald', lastname: 'Bradley' },
    { id: 3, firstname: 'Rafael', lastname: 'Briggs' }
  ];

  constructor(private router: Router) {}

  onSubmit() {
    if (!this.role.name || !this.role.userId) return;
    console.log('Rôle ajouté :', this.role);
    alert('Rôle ajouté avec succès !');
    this.router.navigate(['/roles']);
  }

  cancel() {
    this.router.navigate(['/roles']);
  }
}

