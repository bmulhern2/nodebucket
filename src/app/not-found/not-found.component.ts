/*
Title: nodebucket
Author: Professor Krasso
Date: 10/7/2020
Modified By: Brendan Mulhern
Description: This is nodebucket; a task manager application.
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {
  message: any
  constructor() { 
    this.message = "404 - Page not found"
  }

  ngOnInit() {
  }

}
