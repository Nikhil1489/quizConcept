import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { registerService } from 'src/app/services/register';
import { MatSnackBar } from '@angular/material/snack-bar';

interface Dropdown {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  hide = true;
  regForm: FormGroup;
  selectedGender: string = 'male';


  locations: Dropdown[] = [
    { value: 'us', viewValue: 'United States' },
    { value: 'china', viewValue: 'China' },
    { value: 'india', viewValue: 'India' },
    { value: 'portugal', viewValue: 'Portugal' },
    { value: 'romania', viewValue: 'Romania' }

  ];

  selectedLocation = this.locations[0].value;

  quiztypes: Dropdown[] = [
    { value: 'engineering', viewValue: 'Engineering' },
    { value: 'management', viewValue: 'Management' },
  ];

  selectedQuizType = this.quiztypes[0].value;

  name: any;
  email: any;
  password: any;
  sucessmessage: string = null;
  errormessage: string = null;

  constructor(private fb: FormBuilder, private registerService: registerService, private _snackBar: MatSnackBar) {

    this.regForm = this.fb.group({
      'name': [null, Validators.required],
      'email': [null, [Validators.required, Validators.email]],
      'password': [null, Validators.required],
      'location': [null],
      'gender': [null],
      'quiztype': [null]
    })

  }

  ngOnInit(): void {
  }

  markFormGroupTouched(formGroup: FormGroup) {
    (Object as any).values(formGroup.controls).forEach((control: FormGroup) => {
      control.markAsTouched();
      if (control.controls) {
        this.markFormGroupTouched(control);
      }
    });
  }

  register() {

    this.markFormGroupTouched(this.regForm);
    if (this.regForm.valid) {
      this.registerService.register(this.regForm.getRawValue()).subscribe((res: any) => {
        this._snackBar.open(res.message, 'OK', {
          duration: 4000,
          panelClass: 'custom_snack'
        });
      }, (error) => {
        this._snackBar.open(error.message, 'OK', {
          duration: 4000,
        });
      });
    }

  }

}
