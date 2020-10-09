import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskManagementComponent } from './task-management.component';

describe('TaskManagementComponent', () => {
  let component: TaskManagementComponent;
  let fixture: ComponentFixture<TaskManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should show todo array', () => {
    expect(component.todo).toBeTruthy()
  })
  it('should show done array', () => {
    expect(component.done).toBeTruthy()
  })
  it('should show delete function', () => {
    expect(component.deleteTask).toBeTruthy()
  })
});
