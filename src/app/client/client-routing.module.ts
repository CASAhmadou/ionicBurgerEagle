import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientPage } from './client.page';
import { DetailCommandePage } from './detail-commande/detail-commande.page';

const routes: Routes = [
  {
    path: '',
    component: ClientPage
  },
  {
    path: 'detail-commande/:id',
    component: DetailCommandePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientPageRoutingModule {}
