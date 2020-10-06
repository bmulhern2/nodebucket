/*
Title: nodebucket
Author: Professor Krasso, https://stackoverflow.com/questions/39428132/custom-elements-schema-added-to-ngmodule-schemas-still-showing-error
Date: 9/24/2020
Modified By: Brendan Mulhern
Description: This is nodebucket; a task manager application.
*/

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { AppRoutes } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BaseLayoutComponent } from './shared/base-layout/base-layout.component';
import { AuthLayoutComponent } from './shared/auth-layout/auth-layout.component';
import { HomeComponent } from './pages/home/home.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { SignInComponent } from './sign-in/sign-in.component';
import { MatCardModule } from '@angular/material/card'
import { CookieService } from 'ngx-cookie-service';
import { LoggedInComponent } from './logged-in/logged-in.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NotFoundComponent } from './not-found/not-found.component'

@NgModule({
  declarations: [
    AppComponent,
    BaseLayoutComponent,
    AuthLayoutComponent,
    HomeComponent,
    SignInComponent,
    LoggedInComponent,
    AboutUsComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(AppRoutes, { useHash: true, enableTracing: false, scrollPositionRestoration: 'enabled'}),
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule
  ],
  providers: [ CookieService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
