import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LayoutPageRoutingModule } from './layout-routing.module';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LayoutPageRoutingModule,
    RouterModule
  ],
  declarations: [FooterComponent,HeaderComponent,LoaderComponent],
  exports:[FooterComponent,HeaderComponent,LoaderComponent]
})
export class LayoutPageModule {}
