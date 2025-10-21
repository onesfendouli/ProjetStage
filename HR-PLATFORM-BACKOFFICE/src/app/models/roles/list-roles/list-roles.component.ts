import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-roles',
  templateUrl: './list-roles.component.html',
  styleUrls: ['./list-roles.component.css']
})
export class ListRolesComponent {
  roles = [
    { id: 1, name: 'ADMIN', user: { firstname: 'Ones', lastname: 'Fendouli' } },
    { id: 2, name: 'RH', user: { firstname: 'Amine', lastname: 'Ben Salah' } },
    { id: 3, name: 'CANDIDAT', user: { firstname: 'Sara', lastname: 'Mansour' } },
  ];

  constructor(private router: Router) {}

  openAddRole() {
    this.router.navigate(['/roles/add']);
  }

  viewRole(role: any) {
    alert('Détails du rôle : ' + role.name);
  }

  editRole(role: any) {
    alert('Modification du rôle : ' + role.name);
  }

  deleteRole(id: number) {
    if (confirm('Voulez-vous vraiment supprimer ce rôle ?')) {
      this.roles = this.roles.filter(r => r.id !== id);
    }
  }
}
