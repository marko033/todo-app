import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfTodoListComponent } from './list-of-todo-list.component';

describe('TodoListComponent', () => {
  let component: ListOfTodoListComponent;
  let fixture: ComponentFixture<ListOfTodoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListOfTodoListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListOfTodoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
