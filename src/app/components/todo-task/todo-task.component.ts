import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskState, ITodoTask } from '../../types/tasks.interface';
import {
  CdkDragDrop,
  CdkDrag,
  CdkDropList,
  DragDropModule,
} from '@angular/cdk/drag-drop';
import { AuthService } from '../../services/auth.service';
import { UserRoles } from '../../types/user.interface';

@Component({
  selector: 'app-todo-task',
  standalone: true,
  imports: [CommonModule, DragDropModule, CdkDropList, CdkDrag],
  templateUrl: './todo-task.component.html',
  styleUrl: './todo-task.component.scss',
})
export class TodoTaskComponent {
  @Input() listOfTasks!: ITodoTask[];
  @Input() listType!: string;
  @Input() listOfStates!: string[];
  @Input() state!: TaskState;
  @Output() cdkDropListDropped = new EventEmitter<CdkDragDrop<ITodoTask[]>>();

  constructor(private readonly authService: AuthService) {}

  allowDrop = (drag: any, drop: any) => {
    if (
      (drop.id === 'progressList' || drop.id === 'todoList') &&
      (this.authService.getRole()?.includes(UserRoles.Admin) ||
        this.authService.getRole()?.includes(UserRoles.Executor))
    ) {
      return true;
    } else if (
      drop.id === 'doneList' &&
      (this.authService.getRole()?.includes(UserRoles.Admin) ||
        this.authService.getRole()?.includes(UserRoles.Executor) ||
        this.authService.getRole()?.includes(UserRoles.Controller))
    ) {
      return true;
    } else {
      return false;
    }
  };

  drop(event: CdkDragDrop<ITodoTask[]>) {
    this.cdkDropListDropped.emit(event);
  }
}
