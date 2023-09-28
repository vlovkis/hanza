import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';


  constructor(private router: Router) {}

  login() {

    if (this.email.trim() !== '') {
      // Navigate to another page, e.g., the dashboard page
      this.router.navigate(['/dashboard-list']);
    }

  }
}
