import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileBannerModule } from '../profile-banner/profile-banner.module';
import { InventoryComponent } from './inventory.component';

@NgModule({
  imports: [CommonModule, ProfileBannerModule],
  declarations: [InventoryComponent],
  exports: [InventoryComponent],
})
export class InventoryModule {}
