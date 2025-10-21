import {Component, OnInit} from '@angular/core';

interface Demande {
  id: number;
  user: { firstname: string; lastname: string };
  jobOffer: { title: string };
  appliedAt: string; // date en string pour l'affichage
  status: string;
}

@Component({
  selector: 'app-list-demandes',
  templateUrl: './list-demandes.component.html',
  styleUrls: ['./list-demandes.component.css']
})
export class ListDemandesComponent implements OnInit {

  demandes: Demande[] = [
    {id: 1, user: {firstname: 'Ali', lastname: 'Fendouli'}, jobOffer: {title: 'Développeur'}, appliedAt: '2025-10-14', status: 'En attente'},
    {id: 2, user: {firstname: 'Sara', lastname: 'Benali'}, jobOffer: {title: 'Designer'}, appliedAt: '2025-10-10', status: 'Acceptée'}
  ];

  constructor() { }

  ngOnInit(): void { }

}
