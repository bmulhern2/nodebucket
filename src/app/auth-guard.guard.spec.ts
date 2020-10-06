/*
Title: nodebucket
Author: Professor Krasso
Date: 9/24/2020
Modified By: Brendan Mulhern
Description: This is nodebucket; a task manager application.
*/

import { TestBed, async, inject } from '@angular/core/testing';
import { AuthGuardGuard } from './auth-guard.guard';

describe('AuthGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuardGuard]
    });
  });
});
