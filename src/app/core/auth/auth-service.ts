import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { AuthResponse } from "../../models/auth-response-model";
import { BehaviorSubject } from "rxjs";

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = 'https://node-eemi.vercel.app/api/auth';
  private tokenKey = 'burger-token';
  private loggedIn$ = new BehaviorSubject<boolean>(this.isLoggedIn());

  get isLoggedIn$() {
    return this.loggedIn$.asObservable();
  }

  private isLoggedIn(): boolean {
    return localStorage.getItem(this.tokenKey) !== null;
  }

  http = inject(HttpClient);

  login(email: string, password: string) {
    return this.http.post<AuthResponse>(`${this.apiUrl}/login`, { email, password });
  }

  register(name: string, email: string, password: string) {
    return this.http.post<AuthResponse>(`${this.apiUrl}/register`, { name, email, password });
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  setToken(token: string) {
    localStorage.setItem(this.tokenKey, token);
    this.loggedIn$.next(true);
  }

  

  logout() {
    localStorage.removeItem(this.tokenKey);
    this.loggedIn$.next(false);
  }
}
