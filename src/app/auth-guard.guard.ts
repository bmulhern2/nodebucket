/*
Title: nodebucket
Author: Professor Krasso
Date: 9/24/2020
Modified By: Brendan Mulhern
Description: This is nodebucket; a task manager application.
*/

import { Injectable, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service'
import { Router, CanActivate } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate  {
  constructor(private router: Router, private cookieService: CookieService) { }
  CanActivate() { 
    // Checks to see if user_sesions exists
    let session = this.cookieService.get('user_session')
    if (session) {
      // Navigates to home
      this.router.navigate(['home'])
    } else {
      // Navigates back to sign in component
      this.router.navigate([''])
    }
  }
}
