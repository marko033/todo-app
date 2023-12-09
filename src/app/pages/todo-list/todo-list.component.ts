import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
  DragDropModule,
} from '@angular/cdk/drag-drop';
import { TaskState, ITodoTask } from '../../types/tasks.interface';
import { TodoTaskComponent } from '../../components/todo-task/todo-task.component';
import { MatCardModule } from '@angular/material/card';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    CommonModule,
    DragDropModule,
    CdkDropList,
    CdkDrag,
    TodoTaskComponent,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    RouterLink,
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export class TodoListComponent {
  @Input({ required: true }) listId?: number;

  allTasks: ITodoTask[] = [
    {
      id: 1,
      title: 'Test1',
      description: 'Test1desc',
      state: TaskState.Todo,
      listId: 1,
    },
    {
      id: 2,
      title: 'Test2',
      description: 'Test2desc',
      state: TaskState.Progress,
      listId: 1,
    },
    {
      id: 3,
      title: 'Test3',
      description: 'Test3desc',
      state: TaskState.Done,
      listId: 1,
    },
    {
      id: 4,
      title: 'Test4',
      description: 'Test4desc',
      state: TaskState.Todo,
      listId: 1,
    },
    {
      id: 5,
      title: 'Test5',
      description: 'Test5desc',
      state: TaskState.Todo,
      listId: 1,
    },
    {
      id: 6,
      title: 'Test6',
      description: 'Test6desc',
      state: TaskState.Progress,
      listId: 1,
    },
    {
      id: 7,
      title: 'Test7',
      description: 'Test7desc',
      state: TaskState.Todo,
      listId: 2,
    },
    {
      id: 8,
      title: 'Test8',
      description: 'Test8desc',
      state: TaskState.Progress,
      listId: 2,
    },
    {
      id: 9,
      title: 'Test9',
      description: 'Test9desc',
      state: TaskState.Done,
      listId: 2,
    },
    {
      id: 10,
      title: 'Test10',
      description: 'Test10desc',
      state: TaskState.Todo,
      listId: 2,
    },
    {
      id: 11,
      title: 'Test11',
      description: 'Test11desc',
      state: TaskState.Todo,
      listId: 2,
    },
    {
      id: 12,
      title: 'Test12',
      description: 'Test12desc',
      state: TaskState.Progress,
      listId: 2,
    },
    {
      id: 13,
      title: 'Test13',
      description: 'Test13desc',
      state: TaskState.Todo,
      listId: 3,
    },
    {
      id: 14,
      title: 'Test14',
      description: 'Test14desc',
      state: TaskState.Progress,
      listId: 3,
    },
    {
      id: 15,
      title: 'Test15',
      description: 'Test15desc',
      state: TaskState.Done,
      listId: 3,
    },
    {
      id: 16,
      title: 'Test16',
      description: 'Test16desc',
      state: TaskState.Todo,
      listId: 3,
    },
    {
      id: 17,
      title: 'Test17',
      description: 'Test17desc',
      state: TaskState.Todo,
      listId: 3,
    },
    {
      id: 18,
      title: 'Test18',
      description: 'Test18desc',
      state: TaskState.Progress,
      listId: 3,
    },
  ];

  allTasksFiltredByListId!: ITodoTask[];

  todoTasks!: ITodoTask[];
  progressTasks!: ITodoTask[];
  doneTasks!: ITodoTask[];

  TaskState = TaskState;
  todoSate = TaskState.Todo;
  progressSate = TaskState.Progress;
  doneSate = TaskState.Done;

  formAddTask: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(4)]),
    description: new FormControl(''),
  });

  ngOnInit(): void {
    if (this.listId) this.filterTasksByListId(this.listId);
  }

  filterTasksByListId(listId: number) {
    this.allTasksFiltredByListId = this.allTasks.filter((obj) => {
      return obj.listId == listId;
    });
    this.filterTasks();
  }

  filterTasks() {
    this.todoTasks = this.allTasksFiltredByListId.filter((obj) => {
      return obj.state === TaskState.Todo;
    });
    this.progressTasks = this.allTasksFiltredByListId.filter((obj) => {
      return obj.state === TaskState.Progress;
    });
    this.doneTasks = this.allTasksFiltredByListId.filter((obj) => {
      return obj.state === TaskState.Done;
    });
  }

  dropTask(event: CdkDragDrop<ITodoTask[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  addTask() {
    if (this.formAddTask.valid && this.listId) {
      this.todoTasks.push({
        id: this.allTasks.length + 1,
        title: this.formAddTask.value['title'],
        description: this.formAddTask.value['description'],
        state: TaskState.Todo,
        listId: this.listId,
      });
      this.formAddTask.reset();
    }
  }
}
