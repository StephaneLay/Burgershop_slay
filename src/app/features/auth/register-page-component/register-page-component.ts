import { Component } from "@angular/core";
import { AuthService } from "../../../core/auth/auth-service";
import { Router, RouterLink } from "@angular/router";
import {  FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule, NgIf } from "@angular/common";

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page-component.html',
  styleUrl: './register-page-component.css',
  imports: [ReactiveFormsModule, CommonModule, FormsModule, RouterLink,NgIf],
})
export class RegisterPageComponent {
  name = '';
  email = '';
  password = '';
  error = '';

  constructor(private auth: AuthService, private router: Router) {}

  register() {
    this.auth.register(this.name, this.email, this.password).subscribe({
      next: res => {
        this.auth.setToken(res.token);
        this.router.navigate(['/profile']);
      },
      error: () => this.error = 'Inscription impossible'
    });
  }
}
