import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, range } from 'rxjs';
import { AlertController, LoadingController } from '@ionic/angular';
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


  constructor(private alertController: AlertController,private serv:CatalogueService,
    private route : ActivatedRoute,  private loadingCtrl: LoadingController,) { }

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

  onPrix: number = 0;
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Choisissez le Prix',
      message: `<ion-range [min]="500" [max]="10000" [value]="3000" [pin]="true" [ticks]="true" [snaps]="true"></ion-range>`,
      inputs: [
        {
          name: 'prix',
          type: 'textarea',
          min: 1500,
          max:200000,
          // step:1500
        }

      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
              console.log('Confirm Cancel');
          }
        },
        {
          text: 'OK',
        handler: (alertPrix)=>{
          console.log(alertPrix.prix)
          this.onPrix = alertPrix.prix
          this.serv.getCatalogue().subscribe(data =>{
            this.prod = [...data.burgers, ...data.menus]?.filter(
              pro => pro.prix <= this.onPrix)
          })
        }}],
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
