import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LivreurPageRoutingModule } from './livreur-routing.module';
import { LivreurPage } from './livreur.page';
import { LayoutPageModule } from '../layout/layout.module';
import { CommandeDateFilter, CommandeEtatFilter } from '../shared/services/filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LivreurPageRoutingModule,
    LayoutPageModule,

  ],
  declarations: [LivreurPage]
})
export class LivreurPageModule {}
