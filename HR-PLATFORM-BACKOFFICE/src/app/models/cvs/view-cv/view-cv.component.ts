import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

interface CV {
  id: number;
  user: { firstname: string; lastname: string };
  filePath: string;
  uploadDate: Date;
}

@Component({
  selector: 'app-view-cv',
  templateUrl: './view-cv.component.html',
  styleUrls: ['./view-cv.component.css']
})
export class ViewCvComponent implements OnInit {

  cv!: CV;

  // Exemple de données locales pour tester
  cvs: CV[] = [
    {id: 1, user: {firstname: 'Ali', lastname: 'Fendouli'}, filePath: 'assets/cvs/cv1.pdf', uploadDate: new Date()},
    {id: 2, user: {firstname: 'Sara', lastname: 'Benali'}, filePath: 'assets/cvs/cv2.pdf', uploadDate: new Date()}
  ];

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.cv = this.cvs.find(c => c.id === id)!;
  }
}
