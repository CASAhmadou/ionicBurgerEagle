import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CataloguePageRoutingModule } from './catalogue-routing.module';
import { CataloguePage } from './catalogue.page';
import { CardComponent } from './component/card/card.component';
import { RouterModule } from '@angular/router';
import { LayoutPageModule } from '../layout/layout.module';
import { FooterComponent } from '../layout/footer/footer.component';
import { SecuritePageModule } from '../securite/securite.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CataloguePageRoutingModule,
    RouterModule,
    LayoutPageModule,
    SecuritePageModule,
    
  ],

    declarations: [CataloguePage,CardComponent]
})
export class CataloguePageModule {}
