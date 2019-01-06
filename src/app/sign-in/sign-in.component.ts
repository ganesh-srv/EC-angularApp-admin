import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  signupForm: FormGroup;


  constructor(   private readonly fb: FormBuilder) { }

  ngOnInit() {
    this.signupForm = this.fb.group({
        username: ['', Validators.required],
  password: ['', Validators.required]
    });
    // this.signupForm.valueChanges.subscribe(
    //   (value) => console.log(value)
    // );
    this.signupForm.statusChanges.subscribe(
      (status) => console.log(status)
    );

  }
  onSubmit() {
    console.log(this.signupForm);
    // this.signupForm.reset();
  }
}
