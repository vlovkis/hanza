import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://your-api-url.com'; // Replace with your API endpoint.

  constructor(private http: HttpClient) {}

  // Example method for fetching dashboard data. Modify it as needed.
  getDashboards(): Observable<any[]> {
    // Replace 'dashboard-endpoint' with your actual API endpoint for fetching dashboards.
    return this.http.get<any[]>(`${this.apiUrl}/dashboard-endpoint`);
  }
}
