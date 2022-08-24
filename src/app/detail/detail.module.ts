import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailPageRoutingModule } from './detail-routing.module';

import { DetailPage } from './detail.page';
import { CardComponent } from './card/card.component';
import { LayoutPageModule } from '../layout/layout.module';
import { SecuritePageModule } from '../securite/securite.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailPageRoutingModule,
    LayoutPageModule,
    SecuritePageModule
  ],
  declarations: [DetailPage, CardComponent]
})
export class DetailPageModule {}
