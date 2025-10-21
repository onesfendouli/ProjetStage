import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { User } from '../user.model'; // <-- Interface définie dans user.model.ts

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  users: User[] = [
    {
      id: 1,
      firstname: 'Brooke',
      lastname: 'Kelly',
      email: 'brooke.kelly@example.com',
      password: 'password123',
      dateOfBirth: new Date('1990-05-12'),
      roles: [],
      avatar: 'https://bootdey.com/img/Content/avatar/avatar7.png'
    },
    {
      id: 2,
      firstname: 'Ronald',
      lastname: 'Bradley',
      email: 'ronald.bradley@example.com',
      password: 'password123',
      dateOfBirth: new Date('1988-11-22'),
      roles: [],
      avatar: 'https://bootdey.com/img/Content/avatar/avatar1.png'
    },
    {
      id: 3,
      firstname: 'Rafael',
      lastname: 'Briggs',
      email: 'rafael.briggs@example.com',
      password: 'password123',
      dateOfBirth: new Date('1992-08-15'),
      roles: [],
      avatar: 'https://bootdey.com/img/Content/avatar/avatar2.png'
    },
    {
      id: 4,
      firstname: 'Vickie',
      lastname: 'Meyer',
      email: 'vickie.meyer@example.com',
      password: 'password123',
      dateOfBirth: new Date('1995-03-05'),
      roles: [],
      avatar: 'https://bootdey.com/img/Content/avatar/avatar3.png'
    },
    {
      id: 5,
      firstname: 'Nichole',
      lastname: 'Haynes',
      email: 'nichole.haynes@example.com',
      password: 'password123',
      dateOfBirth: new Date('1991-12-18'),
      roles: [],
      avatar: 'https://bootdey.com/img/Content/avatar/avatar4.png'
    }
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  onAddUser(): void {
    this.router.navigate(['/users/add']);
  }

  deleteUser(id: number): void {
    alert(`Suppression simulée de l'utilisateur avec ID ${id}`);
  }
}
