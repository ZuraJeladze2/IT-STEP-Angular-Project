import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthService {
  isLoggedIn:any = localStorage.getItem('isLoggedIn');
  userEmail: string | null | undefined;
  authError = false;

  constructor(private route:Router, private auth: AngularFireAuth) { }

  async signUp(email: any, password: any) {
    console.log('hi \n',email, password)
    await this.auth.createUserWithEmailAndPassword(email, password)
      .then(response => {
        this.isLoggedIn = true;
        localStorage.setItem('isLoggedIn', 'true')
        console.warn(response);
        this.route.navigate([''])
      })
      .catch(error => {
        console.log(error)});
        this.authError = true;
        
    }
    
    async signIn(email: any, password: any) {
      await this.auth.signInWithEmailAndPassword(email, password)
      .then(response => {
        this.isLoggedIn = true;
        localStorage.setItem('isLoggedIn', 'true')
        console.warn(response);
        this.userEmail = response.user?.email;
        console.log(`Email is ${this.userEmail}`);
        if(email.toLowerCase() == 'z.jeladze22@gmail.com'){
          this.route.navigate(['/admin']);
        }else{
          this.route.navigate([''])
        }
      })
      .catch(error => {
        console.log(error)});
        this.authError = true;
        
  }

  async logOut() {
    await this.auth.signOut()
      .then(response => {
        this.isLoggedIn = false;
        localStorage.removeItem('isLoggedIn')
        console.log(response);
      })
      .catch(error => console.error(error));
  }
}
