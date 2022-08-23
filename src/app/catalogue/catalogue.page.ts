import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IonSlides } from '@ionic/angular';
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


  constructor(private serv:CatalogueService, private route : ActivatedRoute) { }

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

  @ViewChild('slides', {static:true}) slides: IonSlides;

  goToSlide() {
    this.slides.slideTo(2, 500);
  }
}
