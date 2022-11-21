import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskTodoDialogComponent } from './task-todo-dialog.component';
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
    ReactiveFormsModule
  ],
  declarations: [TaskTodoDialogComponent],
  exports: [TaskTodoDialogComponent]

})
export class TaskTodoDialogModule { }
