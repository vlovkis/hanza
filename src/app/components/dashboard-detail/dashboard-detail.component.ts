import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { PowerBIReportEmbedComponent } from 'powerbi-client-angular';
import { IReportEmbedConfiguration, models, service, Embed } from 'powerbi-client';


@Component({
  selector: 'app-dashboard-detail',
  templateUrl: './dashboard-detail.component.html',
  styleUrls: ['./dashboard-detail.component.scss']
})

export class DashboardDetailComponent {
  isFullScreen = false;

  toggleFullScreen() {
    this.isFullScreen = !this.isFullScreen;
  }

    // Function to exit full-screen mode
    exitFullScreen() {
      this.isFullScreen = false;
    }

  constructor(private router: Router ) {}

  home(){
    this.router.navigate(['/dashboard-list']);
  }
  settings(){
    this.router.navigate(['/settings']);
  }
  logout(){
    this.router.navigate(['/login']);
  }
  plasma(){
    this.router.navigate(['/plasma-view']);
  }
  edit(){
    this.router.navigate(['/edit'])
  }
}
