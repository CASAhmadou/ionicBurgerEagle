import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AlertController, IonSlides } from '@ionic/angular';
import { Catalogue } from '../shared/models/catalogue';
import { Produit } from '../shared/models/produits';
import { CatalogueService } from '../shared/services/catalogue.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.page.html',
  styleUrls: ['./catalogue.page.scss'],
})
export class CataloguePage implements OnInit {
  catalogues$ : Observable<Catalogue> | null = null
  prod: Produit[] | undefined = undefined
  type!:string
  prix!:number


  constructor(private alertController: AlertController,private serv:CatalogueService, private route : ActivatedRoute) { }

  ngOnInit() {
    this.serv.getCatalogue().subscribe(data => {
      if(this.type!=""){
        this.prod = [...data.menus,...data.burgers]
      }
    })
  }

  getType(){
    this.route.queryParams.subscribe(params => {
      this.type=params["type"]
      }
    );
    this.serv.getCatalogue().subscribe(data => {
      this.prod = this.type=="menus"?data.menus:data.burgers
    })
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Choisissez le Prix',
      subHeader: 'Important message',
      message: `<ion-range [min]="500" [max]="10000" [value]="3000" [pin]="true" [ticks]="true" [snaps]="true"></ion-range>`,
      buttons: ['OK'],
    });

    await alert.present();
  }



  getPrix(){

    this.route.queryParams.subscribe(params => {
      this.prix=params["prix"]
      }
    );
    this.serv.getCatalogue().subscribe(data => {
      if (this.prix== 10000) {

        this.prod = data.menus
        console.log(this.prod)
      }
    })
  }

  imageOpt={
    slidesPerview:1.5,
    centerSlides:true,
    spaceBetween:10,
    initialSlide: 2,
    speed: 400,
    loop:true,
    autoplay:{
      deplay:3000
    }
  }
}
