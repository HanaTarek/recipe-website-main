import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from 'firebase/auth';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  currentUserEmail: string | null = null;
  showWelcome = false;
  constructor(private authService: AuthService){

  }
  ngOnInit() {
    this.authService.getCurrentUserEmail().subscribe(email => {
      this.currentUserEmail = email;
      if (this.currentUserEmail) {
        this.showWelcome = true;
        // console.log('User logged In:', this.currentUserEmail);
      } else {
        this.showWelcome = false;
        // console.log('No User');
      }
    });

  }


  logOut() {
    this.authService.Logout().then(() => {
    // Optionally, display a logout confirmation message
    alert('You have been logged out successfully.');
    // Update UI elements if necessary
    this.showWelcome = false;
    this.currentUserEmail = null;
    }).catch((error) => {
      // Handle any errors that occur during logout
      console.error('Logout failed:', error);
    });
  }
}
