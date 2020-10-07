/*
Title: nodebucket
Author: Professor Krasso
Date: 10/7/2020
Modified By: Brendan Mulhern
Description: This is nodebucket; a task manager application.
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  message: any
  about: any
  constructor() { 
    this.message = "About us"
    this.about = "Hi my name is Brendan and I am a Web Developer Student"
  }

  ngOnInit() {
  }

}
