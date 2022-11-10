import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DailyComponent } from './daily.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatInputModule } from '@angular/material/input';
import { DailyService } from './daily.service';
import { MatBadgeModule } from '@angular/material/badge';
import { ItemModule } from '../item/item.module';
import { ItemListModule } from '../item-list/item-list.module';

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
    MatBadgeModule,
    ItemListModule,
  ],
  declarations: [DailyComponent],
  providers: [DailyService],
  exports: [DailyComponent],
})
export class DailyModule {}
