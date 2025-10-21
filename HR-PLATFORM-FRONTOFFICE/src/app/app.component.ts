import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HR-PLATFORM-FRONT';
  loginOpen = false;

  openLogin() {
    this.loginOpen = true;
  }

  closeLogin() {
    this.loginOpen = false;
  }
}
