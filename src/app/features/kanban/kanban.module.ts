import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  imports: [CommonModule, DragDropModule],
  declarations: [DashboardComponent]
})
export class KanbanModule {}
