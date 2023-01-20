import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { UserService } from './user.services';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
    private token: string = "";
  apiUrl = 'http://localhost:8083';
  currentUser: User | null = null;

  constructor(private http: HttpClient, private userService: UserService) { }

  // Login method
  login(email: string, password: string): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/login`, {email, password})
    .pipe(
        tap(response => {
            if(response.token){
                this.token = response.token || "";
                localStorage.setItem('jwt_token', response.token);
                const token = localStorage.getItem('jwt_token');
              }
              else {
                console.log("No token found in the response body")
              }
        })
      );
  }

  // Register method
  register(user: User): Observable<User> {
    return this.userService.createUser(user)
      .pipe(
        tap(user => {
          if(user)
            this.currentUser = user
        })
      );
  }

  // Logout method
  logout() {
    localStorage.removeItem('jwt_token');
    this.currentUser = null;
  }

  // Check if user is logged in
  isLoggedIn() {
    return !!this.currentUser;
  }
  getToken(): string {
    return localStorage.getItem('jwt_token') || "";
  }
  getAuthStatus(): boolean {
    return !!localStorage.getItem('jwt_token');
  }
}
