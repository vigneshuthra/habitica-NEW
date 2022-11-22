import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskHabitDialogComponent } from './task-habit-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  declarations: [TaskHabitDialogComponent],
  exports: [TaskHabitDialogComponent],
})
export class TaskHabitDialogModule {}
