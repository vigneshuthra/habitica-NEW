import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from '../../app-routing.module';
import { MatCardModule } from '@angular/material/card';
import { ProfileBannerComponent } from './profile-banner.component';
import { InventoryModule } from '../inventory/inventory.module';
import { ShopModule } from '../shop/shop.module';

@NgModule({
  imports: [CommonModule, MatToolbarModule, AppRoutingModule, MatCardModule],
  declarations: [ProfileBannerComponent],
  exports: [ProfileBannerComponent],
})
export class ProfileBannerModule {}
