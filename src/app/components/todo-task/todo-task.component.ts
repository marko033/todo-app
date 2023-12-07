import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskState, ITodoTask } from '../../types/tasks.interface';
import {
  CdkDragDrop,
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
  @Input() listOfTasks!: ITodoTask[];
  @Input() listType!: string;
  @Input() listOfStates!: string[];
  @Input() state!: TaskState;
  @Output() cdkDropListDropped = new EventEmitter<CdkDragDrop<ITodoTask[]>>();

  drop(event: CdkDragDrop<ITodoTask[]>) {
    this.cdkDropListDropped.emit(event);
  }
}
