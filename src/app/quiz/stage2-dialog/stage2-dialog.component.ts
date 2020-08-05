import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-stage2-dialog',
  templateUrl: './stage2-dialog.component.html',
  styleUrls: ['./stage2-dialog.component.scss']
})
export class Stage2DialogComponent implements OnInit {

  doubleForm: FormGroup;
  selectedDouble: string = 'yes';

  constructor(private fb: FormBuilder, public dialogRef : MatDialogRef<Stage2DialogComponent>,) { 


    this.doubleForm = this.fb.group({
      'isdouble': [null],
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

  is_double(){
    this.markFormGroupTouched(this.doubleForm);
    if (this.doubleForm.valid) {
      sessionStorage.setItem('is_stage2started', 'yes');
      sessionStorage.setItem('is_double', this.doubleForm.getRawValue().isdouble);
      this.dialogRef.close();
    }
  }

}
