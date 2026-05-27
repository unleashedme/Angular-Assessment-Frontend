import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  setToken(token: string): void{
    localStorage.setItem('auth_token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('auth_token');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  getRole(): string | null {
    const token = this.getToken();
    if(!token) return null;

    try{
      const payload = token.split('.')[1];
      const decoded = JSON.parse(atob(payload));
      return decoded.role;
    }catch(e){
      return null;
    }
  }

  logOut(): void{
    localStorage.removeItem('auth_token');
  }
}
