import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {
  selectedReport: string = ''; // Store selected report
  selectedPages: string[] = []; // Store selected report pages
  numberOfPagesPerDepartment: number = 1; // Store number of pages per department
  pageDuration: number = 5; // Store page duration in seconds

  saveSettings() {
    // Implement saving settings logic here
    console.log('Settings saved!');
    console.log('Selected Report:', this.selectedReport);
    console.log('Selected Pages:', this.selectedPages);
    console.log('Number of Pages per Department:', this.numberOfPagesPerDepartment);
    console.log('Page Duration:', this.pageDuration);
  }
  
  constructor(private router: Router) {}
  
  typesOfShoes: string[] = ['Plasma', 'Bending', 'Machining', 'Welding', 'Power Paint', 'Assembly', 'Blast', 'Old Blast', 'Tank Wash', 'Laser', 'Wet Paint'];

  settings(){
    this.router.navigate(['/settings']);
  }
  logout(){
    this.router.navigate(['/login']);
  }
  dashboard(){
    this.router.navigate(['/dashboard-detail']);
  }
  home(){
    this.router.navigate(['/dashboard-list']);
  }
  edit(){
    this.router.navigate(['/edit'])
  }
}
