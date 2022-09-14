import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SecuritePageRoutingModule } from './securite-routing.module';
import { RouterModule } from '@angular/router';
import { ConnexionPage } from './connexion/connexion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SecuritePageRoutingModule,
    RouterModule,
  ],
  declarations: [ConnexionPage]
})
export class SecuritePageModule {}
