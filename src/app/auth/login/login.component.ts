import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { loginService } from 'src/app/services/login';
import { MatSnackBar } from '@angular/material/snack-bar';


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
    private _snackBar: MatSnackBar) {

    this.loginForm = this.formbuilder.group({
      'email': [null, [Validators.required, Validators.email]],
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
  }

  login() {
    this.markFormGroupTouched(this.loginForm);
    if (this.loginForm.valid) {
      this.loginService.register(this.loginForm.getRawValue()).subscribe((res: any) => {
        this._snackBar.open(res.message, 'OK', {
          duration: 4000,
        });
      }, (error) => {
        this._snackBar.open(error.message, 'OK', {
          duration: 4000,
        });
      });
    }

  }

}
