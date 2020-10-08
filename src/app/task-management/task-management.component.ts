/*
Title: nodebucket
Author: Professor Krasso
Date: 10/7/2020
Modified By: Brendan Mulhern
Reference: https://material.angular.io/cdk/drag-drop/overview
Description: This is nodebucket; a task manager application.
*/

import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop'
import { CookieService } from 'ngx-cookie-service'
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-task-management',
  templateUrl: './task-management.component.html',
  styleUrls: ['./task-management.component.css']
})
export class TaskManagementComponent implements OnInit {
  todo: any
  done: any
  constructor(private http: HttpClient, private cookieService: CookieService) { }
  ngOnInit() { 
    let empId = this.cookieService.get('user_session')
    console.log(empId)
    this.http.get('http://localhost:3000/api/employees/' + empId + '/tasks').subscribe(data => {
      this.todo = data['todo']
      this.done = data['done']
    })
  }
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, 
                         event.container.data,
                         event.previousIndex,
                         event.currentIndex);
    }
  }
}
