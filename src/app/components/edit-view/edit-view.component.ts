import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-view',
  templateUrl: './edit-view.component.html',
  styleUrls: ['./edit-view.component.scss']
})
export class EditViewComponent {

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
