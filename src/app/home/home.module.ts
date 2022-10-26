import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DailyModule } from '../daily/daily.module';
import { HomeComponent } from './home.component';
import { TodoListModule } from '../todo-list/todo-list.module';
import { ProfileBannerModule } from '../profile-banner/profile-banner.module';
import { HabitsModule } from '../habits/habits.module';
import { SearchbarModule } from '../searchbar/searchbar.module';


@NgModule({
  imports: [
    CommonModule,
      DailyModule,
      TodoListModule,
      ProfileBannerModule,
      HabitsModule,
      SearchbarModule
  ],
  declarations: [HomeComponent],
exports:[HomeComponent]
})
export class HomeModule { }