import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientPageRoutingModule } from './client-routing.module';

import { ClientPage } from './client.page';
import { LayoutPageModule } from '../layout/layout.module';
import { DetailPage } from '../detail/detail.page';
import { DetailCommandePage } from './detail-commande/detail-commande.page';
import { CommandeDateFilter, CommandeEtatFilter } from '../shared/services/filter.pipe';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientPageRoutingModule,
    LayoutPageModule
  ],

    declarations: [ClientPage,DetailCommandePage,CommandeDateFilter,CommandeEtatFilter]
})
export class ClientPageModule {}
