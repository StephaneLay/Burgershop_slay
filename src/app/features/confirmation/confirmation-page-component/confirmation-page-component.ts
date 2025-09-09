import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation-page-component',
  imports: [],
  templateUrl: './confirmation-page-component.html',
  styleUrl: './confirmation-page-component.css'
})
export class ConfirmationPageComponent {
 constructor(private router: Router) {}

  goHome() {
    this.router.navigate(['/']);
  }
}
