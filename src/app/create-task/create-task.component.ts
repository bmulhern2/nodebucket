import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { CookieService } from 'ngx-cookie-service'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {
  taskForm: FormGroup
  text: any
  constructor(private cookieService: CookieService, private http: HttpClient, private fb: FormBuilder) {
    this.taskForm = this.fb.group({
      text: new FormControl()
    })
   }
  ngOnInit() { }
  createTask() {
    let newTask = {
      text: this.taskForm.get('text').value
    }
    let empId = this.cookieService.get('user_session')
    this.http.post('http://localhost:3000/api/employees/' + empId + '/tasks', newTask, httpOptions).subscribe(err => {
      if (err) console.log(err)
      else console.log("POST Success")
    })
  }
}
