import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../../models/user';
import { registerService } from 'src/app/services/register';

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


  locations: Dropdown[] = [
    { value: 'us', viewValue: 'United States' },
    { value: 'china', viewValue: 'China' },
    { value: 'india', viewValue: 'India' }
  ];

  quiztypes: Dropdown[] = [
    { value: 'engineering', viewValue: 'Engineering' },
    { value: 'management', viewValue: 'Management' },
  ];

  name: any;
  email:any;
  password:any;


  constructor(private fb: FormBuilder, private registerService: registerService) {

    this.regForm = this.fb.group({
      'name': [null, Validators.required],
      'email': [null, Validators.required],
      'password': [null, Validators.required]
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
      // this.name = this.regForm.get('name').value,
      // this.email = this.regForm.get('email').value;
      // this.password = this.regForm.get('password').value;
      // console.log(this.name, this.email, this.password);

      this.registerService.register(this.regForm.getRawValue()).subscribe((res:any)=>{
        console.log(res);
      })

    }

  }

}
