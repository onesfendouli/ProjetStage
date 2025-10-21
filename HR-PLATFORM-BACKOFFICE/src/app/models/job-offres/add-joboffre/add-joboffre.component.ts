import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-joboffre',
  templateUrl: './add-joboffre.component.html',
  styleUrls: ['./add-joboffre.component.css']
})
export class AddJoboffreComponent {
  jobOffer = {
    title: '',
    description: '',
    location: '',
    jobType: 'FULL_TIME', // valeur par défaut
    status: 'OPEN' // valeur par défaut
  };

  jobTypes = ['FULL_TIME', 'PART_TIME', 'INTERNSHIP'];
  statuses = ['OPEN', 'CLOSED'];

  constructor(private router: Router) {}

  onSubmit() {
    // Pour l'instant, ajout local
    console.log('Nouvelle offre créée:', this.jobOffer);
    alert('Offre créée avec succès !');
    this.router.navigate(['/joboffres']);
  }
}
