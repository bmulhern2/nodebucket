/*
Title: nodebucket
Author: Professor Krasso
Date: 9/24/2020
Modified By: Brendan Mulhern
Description: This is nodebucket; a task manager application.
*/

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInComponent } from './sign-in.component';

import { ReactiveFormsModule } from '@angular/forms'

import { RouterTestingModule } from '@angular/router/testing'

import { MatCardModule } from '@angular/material/card'

import { HttpClientModule } from '@angular/common/http'

describe('SignInComponent', () => {
  let component: SignInComponent;
  let fixture: ComponentFixture<SignInComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignInComponent ],
      imports: [ReactiveFormsModule, RouterTestingModule, MatCardModule, HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
