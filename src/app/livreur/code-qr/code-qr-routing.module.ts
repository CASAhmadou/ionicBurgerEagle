import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CodeQrPage } from './code-qr.page';

const routes: Routes = [
  {
    path: '',
    component: CodeQrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CodeQrPageRoutingModule {}
