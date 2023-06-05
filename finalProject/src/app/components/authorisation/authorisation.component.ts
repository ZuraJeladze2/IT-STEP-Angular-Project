import { Component } from '@angular/core';
import { FirebaseAuthService } from 'src/app/services/firebase-auth.service';
import {FormGroup, FormControl, ReactiveFormsModule, Validators} from '@angular/forms'
import {Router} from '@angular/router'

@Component({
  selector: 'app-authorisation',
  templateUrl: './authorisation.component.html',
  styleUrls: ['./authorisation.component.scss']
})
export class AuthorisationComponent {
  constructor(private authService: FirebaseAuthService, private route: Router){}

  isSignedIn = false;

  signInModal:boolean = false;
  signUpModal:boolean = false;

  authError = false;
  
  authForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });
  
  onSubmit(){
    console.log(this.authForm.value);
  }

  async onSignUp(formVal: any){
    await this.authService.signUp(formVal.value.email, formVal.value.password)

    if(this.authService.isLoggedIn){
      this.isSignedIn = true;
      localStorage.setItem('isLoggedIn', 'true')
      
    }else{
      this.authError = true;
    }
  }

  
  async onSignIn(formVal: any){
    await this.authService.signIn(formVal.value.email, formVal.value.password)

    if(this.authService.isLoggedIn){
      this.isSignedIn = true;
      localStorage.setItem('isLoggedIn', 'true')
      if(formVal.value.email == 'z.jeladze22@itstep.ge'){
        this.route.navigate(['/admin']);
      }
    }else{
      this.authError = true;
    }
  }





  signInForm(){
    this.signInModal = true;
  }
  signUpForm(){
    this.signUpModal = true;
  }
  toBack(){
    this.signInModal = false;
    this.signUpModal = false;
  }
}
