import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn = false;

  constructor(private http: HttpClient) {}

  // Simulate user authentication. You can replace this with your actual authentication logic.
  login(username: string, password: string): Observable<boolean> {
    // Replace this with your authentication API endpoint or logic.
    // Typically, you'd make an HTTP POST request to your backend server.
    // For example:
    // return this.http.post<boolean>('/api/login', { username, password });
    
    // For this example, we simulate successful login.
    this.loggedIn = true;
    return new Observable<boolean>((observer) => {
      observer.next(true);
      observer.complete();
    });
  }

  logout(): void {
    // Implement logout logic here.
    // You might need to make an HTTP request to your backend server to invalidate the session.
    this.loggedIn = false;
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }
}
