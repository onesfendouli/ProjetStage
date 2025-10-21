import { Component } from '@angular/core';

interface CV {
  id: number;
  user: { firstname: string; lastname: string };
  filePath: string;
  uploadDate: Date;
}


@Component({
  selector: 'app-list-cv',
  templateUrl: './list-cv.component.html',
  styleUrls: ['./list-cv.component.css']
})


export class ListCvComponent {
  cvs: CV[] = [];

  constructor() {}

  ngOnInit(): void {
    // Simuler des CVs
    this.cvs = [
      { id: 1, user: { firstname: 'John', lastname: 'Doe' }, filePath: 'cv_john.pdf', uploadDate: new Date() },
      { id: 2, user: { firstname: 'Jane', lastname: 'Smith' }, filePath: 'cv_jane.pdf', uploadDate: new Date() },
      { id: 3, user: { firstname: 'Ali', lastname: 'Ben Salah' }, filePath: 'cv_ali.pdf', uploadDate: new Date() }
    ];
  }

  onAddCV(): void {
    alert('Action Ajouter CV ici !');
  }

  deleteCV(id: number): void {
    if(confirm("Voulez-vous vraiment supprimer ce CV ?")) {
      this.cvs = this.cvs.filter(c => c.id !== id);
    }
  }
}
