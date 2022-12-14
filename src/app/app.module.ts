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
import { Drivers, Storage } from '@ionic/storage';
import { TokenInterceptorService } from './securite/shared/services/token-interceptor.service';
import { IonicHeaderParallaxModule } from 'ionic-header-parallax';
import { ZXingScannerModule } from '@zxing/ngx-scanner';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,IonicModule.forRoot(),
    IonicStorageModule.forRoot({
      name: '__mydb',
     driverOrder: [Drivers.IndexedDB, Drivers.LocalStorage]
    }),
    AppRoutingModule,HttpClientModule,
    RouterModule,HttpClientModule,
    SecuritePageModule,RouterModule,
    FormsModule,Ng2SearchPipeModule,
    IonicHeaderParallaxModule,ZXingScannerModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, {provide:HTTP_INTERCEPTORS, useClass:TokenInterceptorService,multi:true}],
  bootstrap: [AppComponent],
})
export class AppModule {}
