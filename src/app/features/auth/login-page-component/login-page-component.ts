import { Component } from "@angular/core";
import { AuthService } from "../../../core/auth/auth-service";
import { Router, RouterLink } from "@angular/router";
import { FormsModule, NgModel, NgModelGroup, ReactiveFormsModule } from "@angular/forms";
import { NgIf } from "@angular/common";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page-component.html',
  styleUrl: './login-page-component.css',
  imports: [ReactiveFormsModule,FormsModule,NgIf,RouterLink]
})
export class LoginPageComponent {
  email = '';
  password = '';
  error = '';

  constructor(private auth: AuthService, private router: Router) {}

  login() {
    this.auth.login(this.email, this.password).subscribe({
      next: res => {
        this.auth.setToken(res.token);
        this.router.navigate(['/profile']);
      },
      error: () => this.error = 'Email ou mot de passe incorrect'
    });
  }
}
