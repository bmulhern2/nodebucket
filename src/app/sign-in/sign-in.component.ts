/*
Title: nodebucket
Author: Professor Krasso
Date: 9/24/2020
Modified By: Brendan Mulhern
Description: This is nodebucket; a task manager application.
*/

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'
import { CookieService } from 'ngx-cookie-service'

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  form: FormGroup;
  constructor(private cookieService: CookieService, private router: Router, private http: HttpClient, private fb: FormBuilder) { }
  ngOnInit() { 
  // Form Initalization
    this.form = this.fb.group({
  // EmployeeID initalization with validators
      empId: [null, Validators.compose([Validators.required, Validators.pattern('^[0-9]*$')])]
    })
  }
  // Login Function
  login() { 
  // Get EmployeeID input
    let empId = this.form.get('empId').value;
    console.log(empId)
  // Validating the input to the database EmployeeIDs
    this.http.get('/api/employees/employee' + empId).subscribe(res => {
      if (res) {
  // Sets the cookie service variable and navigates to the home path
        this.cookieService.set('user_session', 'true')
        this.router.navigate(['home'])
      } else {
  // Navigates back to the sign in page
        this.router.navigate([''])
      }
    })
  // Resets the form
    this.form.reset();
  }
}
