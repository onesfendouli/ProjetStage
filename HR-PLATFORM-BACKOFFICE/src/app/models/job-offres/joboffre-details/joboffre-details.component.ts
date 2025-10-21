import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

interface JobOffer {
  id: number;
  title: string;
  description: string;
  location: string;
  createdAt: Date;
  jobType: string;
  status: string;
}

@Component({
  selector: 'app-joboffre-details',
  templateUrl: './joboffre-details.component.html',
  styleUrls: ['./joboffre-details.component.css']
})
export class JoboffreDetailsComponent {

  jobOffer!: JobOffer;

  // Exemple de données locales
  jobOffers: JobOffer[] = [
    {id: 1, title: 'Développeur Angular', description: 'Développement front-end Angular', location: 'Tunis', createdAt: new Date(), jobType: 'FULL_TIME', status: 'OPEN'},
    {id: 2, title: 'Administrateur Réseau', description: 'Gestion des serveurs et réseau', location: 'Sfax', createdAt: new Date(), jobType: 'PART_TIME', status: 'CLOSED'}
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.jobOffer = this.jobOffers.find(j => j.id === id)!;
  }
}
