import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../core/auth/auth-service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-header-component',
  imports: [RouterLink,NgIf],
  templateUrl: './header-component.html',
  styleUrl: './header-component.css'
})
export class HeaderComponent {
  authservice: any = inject(AuthService);
  isLoggedIn = this.authservice.isLoggedIn();
  logout() {
    this.authservice.logout();
  }
}
