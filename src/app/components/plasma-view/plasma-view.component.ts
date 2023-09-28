import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plasma-view',
  templateUrl: './plasma-view.component.html',
  styleUrls: ['./plasma-view.component.scss']
})
export class PlasmaViewComponent {
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
  main(){
    this.router.navigate(['/dashboard-detail']);
  }
}
