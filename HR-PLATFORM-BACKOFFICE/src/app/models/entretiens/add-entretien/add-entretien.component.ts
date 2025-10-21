import { Component } from '@angular/core';
interface Entretien {
  id?: number;
  demandeId: number;
  date: string;
  location: string;
  status: 'PENDING' | 'ACCEPTED' | 'CANCELED';
}
@Component({
  selector: 'app-add-entretien',
  templateUrl: './add-entretien.component.html',
  styleUrls: ['./add-entretien.component.css']
})
export class AddEntretienComponent {

  entretien: Entretien = {
    demandeId: 0,
    date: '',
    location: '',
    status: 'PENDING'
  };

  constructor() { }

  onSubmit(): void {
    console.log('Entretien ajouté :', this.entretien);
    alert('Entretien ajouté ! (données en console)');
    // Ici tu peux remplacer par ton appel à une API si besoin
  }
}
