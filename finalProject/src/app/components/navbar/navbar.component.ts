import { Component } from '@angular/core';
import {Router} from '@angular/router'
import { FirebaseAuthService } from 'src/app/services/firebase-auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
constructor(private route:Router, private authService: FirebaseAuthService){}

  loggedIn: boolean|string|null = localStorage.getItem('isLoggedIn');
  userEmail: string | null | undefined;

  ngOnInit(){
      this.loggedIn = this.authService.isLoggedIn;
      this.userEmail = this.authService.userEmail;
      console.log(this.userEmail);
  }

  toProducts(){
    this.route.navigate(['/products'])
  }

  logOut(){
    this.authService.logOut();
    this.loggedIn = false;
    localStorage.removeItem('isLoggedIn')
  }
}
