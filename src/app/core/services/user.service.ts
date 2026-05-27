import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  login(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }

  register(userData: { fullName: string, email: string, userId: string, password: string, role?: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, userData);
  }

  getUserRecords(): Observable<any>{
    return this.http.get(`${this.apiUrl}/records?delay=2000`);
  }

  getAdminUsers(): Observable<any>{
    return this.http.get(`${this.apiUrl}/users?delay=1500`);
  }
}
