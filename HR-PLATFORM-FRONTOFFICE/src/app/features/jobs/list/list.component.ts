import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  searchTerm: string = '';

  jobs = [
    {id: 1, title: 'Développeur Angular', company: 'TechCorp', location: 'Paris, France', date: '2023-10-01'},
    {id: 2, title: 'Data Scientist', company: 'DataLabs', location: 'Lyon, France', date: '2023-09-28'},
    {id: 3, title: 'Ingénieur Sécurité', company: 'CyberTech', location: 'Marseille, France', date: '2023-09-25'}
  ];

  constructor(private router: Router) {
  }

  get filteredJobs() {
    return this.jobs.filter(job =>
      job.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  goToDetails(jobId: number) {
    this.router.navigate(['/jobs', jobId]);
  }

}
