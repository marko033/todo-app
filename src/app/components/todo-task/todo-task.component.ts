import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskState, TodoTask } from '../../types/tasks';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
  DragDropModule,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-todo-task',
  standalone: true,
  imports: [CommonModule, DragDropModule, CdkDropList, CdkDrag],
  templateUrl: './todo-task.component.html',
  styleUrl: './todo-task.component.scss',
})
export class TodoTaskComponent {
  @Input() listOfTasks!: TodoTask[];
  @Input() listType!: string;
  @Input() listOfStates!: string[];
  @Input() state!: TaskState;
  @Output() cdkDropListDropped = new EventEmitter<CdkDragDrop<TodoTask[]>>();

  drop(event: CdkDragDrop<TodoTask[]>) {
    this.cdkDropListDropped.emit(event);
  }
}
