/*
Title: nodebucket
Author: Professor Krasso
Date: 9/24/2020
Modified By: Brendan Mulhern
Reference: https://stackoverflow.com/questions/36260839/angular-2-how-to-redirect-to-404-or-other-path-if-the-path-does-not-exist
Description: This is nodebucket; a task manager application.
*/

import {Routes} from '@angular/router';
import {BaseLayoutComponent} from './shared/base-layout/base-layout.component';
import {HomeComponent} from './pages/home/home.component';
import { LoggedInComponent } from './logged-in/logged-in.component'
import { AuthGuardGuard } from './auth-guard.guard';
import { NotFoundComponent } from './not-found/not-found.component'
import { AboutUsComponent } from './about-us/about-us.component';
import { TaskManagementComponent } from './task-management/task-management.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuardGuard]
      },
      {
        path: 'home',
        component: TaskManagementComponent
      },
      {
        path: 'about',
        component: AboutUsComponent
      },
      {
        path: '404',
        component: NotFoundComponent
      },
      {
        path: '**',
        redirectTo: '404'
      }
    ]
  }
];
