import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  signupForm: FormGroup;


  constructor(private router: Router,
    private auth: AuthService) { }
  username: string;
  password: string;
  ngOnInit() {
  }
  login(): void {
    if (this.username === 'admin' && this.password === 'admin') {
      this.auth.sendToken(this.username);
      this.router.navigate(['Crm-Glimpse']);
    } else {
      alert('Invalid credentials');
    }
  }
}
