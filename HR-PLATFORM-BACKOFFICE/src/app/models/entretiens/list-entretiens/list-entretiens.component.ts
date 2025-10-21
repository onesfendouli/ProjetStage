import {Component, OnInit} from '@angular/core';

interface Entretien {
  id: number;
  demandeId: number;
  date: string;
  location: string;
  status: 'PENDING' | 'ACCEPTED' | 'CANCELED';
}

@Component({
  selector: 'app-list-entretiens',
  templateUrl: './list-entretiens.component.html',
  styleUrls: ['./list-entretiens.component.css']
})
export class ListEntretiensComponent implements OnInit {

  entretiens: Entretien[] = [
    {id: 1, demandeId: 101, date: '2025-10-20T10:00', location: 'Salle A', status: 'PENDING'},
    {id: 2, demandeId: 102, date: '2025-10-21T14:00', location: 'Salle B', status: 'ACCEPTED'}
  ];

  constructor() {
  }

  ngOnInit(): void {
  }
}
