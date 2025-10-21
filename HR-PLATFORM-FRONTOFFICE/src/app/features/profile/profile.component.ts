import {Component, OnInit} from '@angular/core';
import {AuthService, User} from "../auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  user: User | null = null;

  constructor(private auth: AuthService , private router: Router) {}

  ngOnInit() {
    this.auth.user$.subscribe(u => this.user = u);
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/']);
  }
}
