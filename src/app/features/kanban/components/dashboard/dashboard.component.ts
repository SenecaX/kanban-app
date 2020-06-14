import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from '@angular/cdk/drag-drop';
import { Board } from '../../../../shared/model/board.model';
import { Column } from '../../../../shared/model/column.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  public todo: string[];
  public done: string[];
  public board: Board;

  constructor() {
    this.todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];
    this.done = [
      'Get up',
      'Brush teeth',
      'Take a shower',
      'Check e-mail',
      'Walk dog'
    ];
    this.board = new Board('Test board', [
      new Column('Todo', ['One', 'Two', 'Three']),
      new Column('In Progress', ['Red', 'Blue', 'yellow']),
      new Column('Done', [
        'Get to work',
        'Pick up groceries',
        'Go home',
        'Fall asleep'
      ])
    ]);
  }

  public drop(event: CdkDragDrop<string[]>): void {
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

  public saveTask(taskName): void {}
}
