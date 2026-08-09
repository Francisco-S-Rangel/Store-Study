import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListDisplay } from './todo-list-display';

describe('TodoListDisplay', () => {
  let component: TodoListDisplay;
  let fixture: ComponentFixture<TodoListDisplay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoListDisplay]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoListDisplay);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
