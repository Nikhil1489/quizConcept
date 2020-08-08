import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { loginService } from 'src/app/services/login';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  hide = true;
  email: any;
  password: any;

  constructor(private formbuilder: FormBuilder, private loginService: loginService,
    private _snackBar: MatSnackBar, private router: Router) {

    this.loginForm = this.formbuilder.group({
      'username': [null, [Validators.required, Validators.email]],
      'password': [null, Validators.required],
    })

  }

  markFormGroupTouched(formGroup: FormGroup) {
    (Object as any).values(formGroup.controls).forEach((control: FormGroup) => {
      control.markAsTouched();
      if (control.controls) {
        this.markFormGroupTouched(control);
      }
    });
  }

  ngOnInit(): void {
    if(sessionStorage.length != 0)
    {
     this.router.navigateByUrl('instructions');
    }
  }

  login() {
    this.markFormGroupTouched(this.loginForm);
    if (this.loginForm.valid) {
      this.loginService.login(this.loginForm.getRawValue()).subscribe((res: any) => {
        if (res.result === 1) {
          sessionStorage.setItem('email', res.user_data.email);
          sessionStorage.setItem('id', res.user_data.user_id);
          sessionStorage.setItem('username', res.user_data.username);
          this.router.navigateByUrl('instructions');
        }
        else {
          this._snackBar.open(res.message, 'OK', {
            duration: 4000,
          });
        }
      }, (error) => {
        this._snackBar.open(error.message, 'OK', {
          duration: 4000,
        });
      });
    }

  }

}
