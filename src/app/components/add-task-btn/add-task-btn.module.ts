import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTaskBtnComponent } from './add-task-btn.component';
import { MatMenuModule } from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';
import { TaskDialogComponent } from '../task-dialog/task-dialog.component';
import { TaskDialogModule } from '../task-dialog/task-dialog.module';


@NgModule({
  imports: [CommonModule, MatMenuModule, MatDialogModule,TaskDialogModule],
  declarations: [AddTaskBtnComponent],
  exports: [AddTaskBtnComponent],
})
export class AddTaskBtnModule {}
