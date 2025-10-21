import {Component, EventEmitter, Output} from '@angular/core';
import {AuthService} from "../../../features/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Output() loginClicked = new EventEmitter<void>();

  isLoggedIn = false;
  userName = '';

  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.authService.isLoggedIn$.subscribe(status => this.isLoggedIn = status);
    this.authService.user$.subscribe(user => {
      this.userName = user ? `${user.firstName} ${user.lastName}` : '';
    });
  }

  openLogin() {
    this.loginClicked.emit();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
