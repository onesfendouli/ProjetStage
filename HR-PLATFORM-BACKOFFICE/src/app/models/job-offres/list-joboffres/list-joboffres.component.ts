import {Component, OnInit} from '@angular/core';
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
  selector: 'app-list-joboffres',
  templateUrl: './list-joboffres.component.html',
  styleUrls: ['./list-joboffres.component.css']
})
export class ListJoboffresComponent implements OnInit {

  jobOffers: JobOffer[] = [];

  ngOnInit(): void {
    // 🔹 Données locales simulées
    this.jobOffers = [
      {
        id: 1,
        title: 'Développeur Angular',
        description: 'Création d’applications web modernes.',
        location: 'Tunis',
        createdAt: new Date('2025-10-01'),
        jobType: 'FULL_TIME',
        status: 'OPEN'
      },
      {
        id: 2,
        title: 'Stage DevOps',
        description: 'Automatisation et déploiement Docker / Jenkins.',
        location: 'Sousse',
        createdAt: new Date('2025-09-15'),
        jobType: 'INTERNSHIP',
        status: 'OPEN'
      }
    ];
  }

}
