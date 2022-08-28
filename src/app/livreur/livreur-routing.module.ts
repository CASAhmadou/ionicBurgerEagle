import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LivreurPage } from './livreur.page';

const routes: Routes = [
  {
    path: '',
    component: LivreurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LivreurPageRoutingModule {}
