import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConnexionPage } from './connexion/connexion.page';


const routes: Routes = [
  { path: '',component: ConnexionPage},
  { path: 'connexion', component: ConnexionPage},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SecuritePageRoutingModule {}
