import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { LayoutPageModule } from './layout/layout.module';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SecuritePageModule } from './securite/securite.module';
import { FormsModule } from '@angular/forms';
import { IonicStorageModule } from '@ionic/storage-angular';

import { TokenInterceptorService } from './securite/shared/services/token-interceptor.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    AppRoutingModule,HttpClientModule,
    RouterModule,HttpClientModule,
    LayoutPageModule,SecuritePageModule,RouterModule,
    FormsModule,Ng2SearchPipeModule,
  ],

  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, {provide:HTTP_INTERCEPTORS, useClass:TokenInterceptorService,multi:true}],
  bootstrap: [AppComponent],
})
export class AppModule {}
