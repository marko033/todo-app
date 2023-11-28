import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  CdkDragDrop,
  CdkDropList,
  CdkDrag,
  moveItemInArray,
  DragDropModule,
} from '@angular/cdk/drag-drop';
import { TodoList } from '../../types/tasks';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-list-of-todo-list',
  standalone: true,
  imports: [
    CommonModule,
    DragDropModule,
    CdkDropList,
    CdkDrag,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './list-of-todo-list.component.html',
  styleUrl: './list-of-todo-list.component.scss',
})
export class ListOfTodoListComponent {
  todoLists: TodoList[] = [
    { id: 1, name: 'Test1' },
    { id: 2, name: 'Test2' },
    { id: 3, name: 'Test3' },
    { id: 4, name: 'Test4' },
    { id: 5, name: 'Test5' },
    { id: 6, name: 'Test6' },
  ];

  formAddTaskList: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
  });

  constructor(private router: Router) {}

  dropTodoList(event: CdkDragDrop<{ id: number; name: string }[]>) {
    moveItemInArray(this.todoLists, event.previousIndex, event.currentIndex);
    this.todoLists = this.todoLists;
  }

  openTodoList(id: number) {
    console.log(id + ' ' + this.todoLists);
    this.router.navigate(['todo-list/' + id]);
  }

  addTodoList() {
    console.log(this.formAddTaskList);
    if (this.formAddTaskList.valid) {
      this.todoLists.push({
        id: this.todoLists.length + 1,
        name: this.formAddTaskList.value['name'],
      });
      this.formAddTaskList.reset();
    }
  }
}
