import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { ProfileBannerModule } from '../profile-banner/profile-banner.module';



@NgModule({
  imports: [
    CommonModule,
    ProfileBannerModule
  ],
declarations: [ShopComponent],
exports:[ShopComponent]
})
export class ShopModule { }
