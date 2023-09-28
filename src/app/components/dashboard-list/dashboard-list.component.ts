import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-list',
  templateUrl: './dashboard-list.component.html',
  styleUrls: ['./dashboard-list.component.scss']
})
export class DashboardListComponent {

  constructor(private router: Router){}

  redirectToDashboard() {
    this.router.navigate(['/dashboard-detail']); // Replace '/dashboard' with your actual dashboard route
  }
}
