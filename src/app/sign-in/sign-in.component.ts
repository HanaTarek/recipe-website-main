import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  signinForm: FormGroup=new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.signinForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.signinForm.valid) {
      const { email, password } = this.signinForm.value;
      this.authService.Login(email, password)
        .then(res => {
          // Handle successful login
          console.log(res);
        })
        .catch(err => {
          // Handle login error
          console.error(err);
        });
    }
  }

  forgotPassword() {
    const email = this.signinForm.get('email')?.value;
    if (email) {
      this.authService.sendPasswordResetEmails(email);
    }
  }

}
