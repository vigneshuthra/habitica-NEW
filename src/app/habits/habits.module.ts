import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatInputModule } from '@angular/material/input';
import { HabitsComponent } from './habits.component';
import {MatButtonModule} from '@angular/material/button';
import { HabitService } from './habits.service';
import {MatBadgeModule} from '@angular/material/badge';
import { ItemListModule } from '../item-list/item-list.module';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  imports: [
    CommonModule,
    MatCheckboxModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatIconModule,
    DragDropModule,
    MatInputModule,
    MatButtonModule,
    MatBadgeModule,
    ItemListModule,
    MatTabsModule

  ],
  declarations: [HabitsComponent],
  providers:[HabitService],
  exports: [HabitsComponent],
})
export class HabitsModule {}
