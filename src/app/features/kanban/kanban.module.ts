import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  imports: [CommonModule, DragDropModule],
  declarations: [DashboardComponent, HeaderComponent]
})
export class KanbanModule {}
