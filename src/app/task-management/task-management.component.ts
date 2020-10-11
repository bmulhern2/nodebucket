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
import { Observable } from 'rxjs'

@Component({
  selector: 'app-task-management',
  templateUrl: './task-management.component.html',
  styleUrls: ['./task-management.component.css']
})
export class TaskManagementComponent implements OnInit {
  todo: any
  done: any
  constructor(private http: HttpClient, private cookieService: CookieService) { }
  async ngOnInit() {
    await this.getTasks();
   }
  async getTasks() {
    let empId = this.cookieService.get('user_session')
    console.log(empId)
    await this.http.get<any>('http://localhost:3000/api/employees/' + empId + '/tasks').subscribe(data => {
      this.todo = data['todo']
      this.done = data['done']
    })
  }
  deleteTask(item: any) {
    let empId = this.cookieService.get('user_session')
    this.http.delete('http://localhost:3000/api/employees/' + empId + '/tasks/' + item._id).subscribe(err => {
      if (err) console.log(err)
      else console.log("Delete Success")
    })
  }
  updateTask(empId, todo, done): any {
    empId = this.cookieService.get('user_session')
    this.http.put('http://localhost:3000/api/employees/' + empId + '/tasks', {
      todo,
      done
    }).subscribe(res => {
      console.log(res)
    })
  }
  drop(event: CdkDragDrop<any>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      let empId = this.cookieService.get('user_session')
      this.updateTask(empId, this.todo, this.done)
    } else {
      transferArrayItem(event.previousContainer.data, 
                         event.container.data,
                         event.previousIndex,
                         event.currentIndex);
      let empId = this.cookieService.get('user_session')
      this.updateTask(empId, this.todo, this.done)
    }
  }
}
