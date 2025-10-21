import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface User {
  firstName: string;
  lastName: string;
  email: string;
  location?: string;
  birthDate?: string;
  education?: string;
  experience?: string;
  phone?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _isLoggedIn = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn.asObservable();

  private _user = new BehaviorSubject<User | null>(null);
  user$ = this._user.asObservable();

  constructor() {}


  logout() {
    this._user.next(null);
    this._isLoggedIn.next(false);
  }

  getUser(): User | null {
    return this._user.value;
  }
  login(user: User) {
    // Exemple d'utilisateur pour test
    this._user.next({
      firstName: 'Fendouli',
      lastName: 'Ones',
      email: 'fendouli@example.com',
      location: 'Tunis',
      birthDate: '1995-05-10',
      education: 'Master',
      experience: '3 ans',
      phone: '12345678'
    });
    this._isLoggedIn.next(true);
  }
}
