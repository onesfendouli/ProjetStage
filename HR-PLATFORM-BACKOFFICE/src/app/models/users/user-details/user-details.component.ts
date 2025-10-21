import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../user.model";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  userId!: number;
  user: User | any = {}; // remplace 'any' par 'User' si tu as le model complet

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.userId = +this.route.snapshot.paramMap.get('id')!;
    this.loadUser();
  }

  loadUser() {
    // Ici tu peux récupérer l'utilisateur depuis ton backend via service
    // Pour l'exemple on met des données fictives
    this.user = {
      id: this.userId,
      avatar: 'https://bootdey.com/img/Content/avatar/avatar7.png',
      firstname: 'Brooke',
      lastname: 'Kelly',
      email: 'brooke.kelly@example.com',
      role: 'Admin',
      dateOfBirth: '1990-05-15'
    };
  }

  goBack() {
    this.router.navigate(['/users/list']);
  }

  editUser() {
    this.router.navigate(['/users/edit', this.userId]);
  }
}
