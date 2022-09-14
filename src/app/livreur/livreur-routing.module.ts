import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LivreurPage } from './livreur.page';

const routes: Routes = [
  {
    path: '',
    component: LivreurPage
  },
  {
    path: 'code-qr/:id',
    loadChildren: () => import('../livreur/code-qr/code-qr.module').then( m => m.CodeQrPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LivreurPageRoutingModule {}
