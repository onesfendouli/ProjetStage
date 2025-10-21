import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

interface Demande {
  id: number;
  appliedAt: string;
  status: string;
  user: { firstname: string; lastname: string };
  jobOffer: { title: string; description: string };
  cv?: { filePath: string };
}

@Component({
  selector: 'app-details-demande',
  templateUrl: './demande-details.component.html',
  styleUrls: ['./demande-details.component.css']

})
export class DemandeDetailsComponent implements OnInit {

  demande!: Demande;

  demandes: Demande[] = [
    {
      id: 1,
      appliedAt: '2025-10-14',
      status: 'En attente',
      user: {firstname: 'Ali', lastname: 'Fendouli'},
      jobOffer: {title: 'Développeur', description: 'Poste de développeur Angular/Java'},
      cv: {filePath: 'assets/cvs/cv1.pdf'}
    }
  ];

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.demande = this.demandes.find(d => d.id === id)!;
  }
}
