import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemListComponent } from './item-list.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { ItemModule } from '../item/item.module';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  imports: [CommonModule,
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
    ItemModule,
    MatTabsModule
  ],
  declarations: [ItemListComponent],

  exports: [ItemListComponent],
})
export class ItemListModule {}
