import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Observable } from 'rxjs';
import { TokenLoginService } from '../securite/shared/services/token-login.service';
import { Detail } from '../shared/models/detail';
import { BurgerCommande, CommandeMenuBoissonTaille, MenuCommande, Panier } from '../shared/models/panier';
import { Produit } from '../shared/models/produits';
import { CatalogueService } from '../shared/services/catalogue.service';
import { CommandeService } from '../shared/services/commande.service';
import { PanierService } from '../shared/services/panier.service';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  detail : Observable<Detail> | null = null
  commandeMenuBoissonTailles : CommandeMenuBoissonTaille[] = []


  constructor(private serv:CatalogueService,private route : ActivatedRoute,
    private router:Router, private panier: PanierService, ) { }

    private type: any =""
    private id: any = 0
    qte = 0
    vide = 0
    disabled_attr = false
    many : any[] = []
    quantite = 0
    boissonDuMenu: Produit[]=[]

    @Output() index: EventEmitter<any> = new EventEmitter();
    @Output() MontantTotal: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get('id')
    this.type=this.route.snapshot.paramMap.get('type')
    this.detail=this.serv.getProduit(this.id)
    // console.log(this.detail)
  }



  desactiveButton(event: any) {
    this.disabled_attr =  event
  }

  //error
  size:number = 1
  obj(event :any){
    // alert(event)
    this.size= event
  }

  qteMenu: number = 1;
  countEmit(value :number){
    this.qteMenu = value
  }

  AjoutPanier(detail:Detail){

    if(detail.burger){
      let burger:BurgerCommande = {
        quantite:this.size,
        burger:detail.burger
      }
      this.panier.ajoutBurger(burger)
    }

    if (detail.menu){
      let menu:MenuCommande = {
        quantite:this.size,
        menu:{
          id: Number(detail.menu.id),
          nom: detail.menu.nom,
          image: detail.menu.image,
          type: detail.menu.type,
          prix:detail.menu.prix,
          commandeMenuBoissonTailles: this.commandeMenuBoissonTailles
        }
      }
      this.panier.ajoutMenu(menu)
      console.log(this.panier.behav.value)
    }

  }


  tapEvent($event){}
  dec() { this.resize(-1); }
  inc() { this.resize(+1); }

  resize(delta: number) {
    this.size = Math.min(40, Math.max(1, +this.size + delta));
  }

  getPrixBurger(data:any){
    let prix = data.burger.prix * (data.quantite+this.size)
    return prix
  }

  getPrixMenu(data:any){
    let prix = data.menu.prix * (data.quantite+this.size)
    return prix
  }

  getPrixBoisson(data:any){
    let prix = data.boisson.prix * (data.quantite+this.size)
    return prix
  }

  // getPrixFrite(data:any){
  //   let prix = data.produi * (data.quantite+this.size)
  //   return prix
  // }

  delete(event:any){
    alert('ok')
    this.index.emit(event)
  }

  value(event :any){
    this.qte = event.target.value
  }

  panierOuvert():void{
    this.router.navigateByUrl(`commande/panier`)
  }



  text = ""
  text2 = ""
  textvide = false
  parentControl(event :any){
    if(this.many.length==0)
    {
        let object={
          idTaille:event.idTaille,
          qte:event.qte,
          boissons:[
            {
              idBoisson:event.boissonTaille.idBoisson,
               size:this.size,
               stock:event.boissonTaille.stock,
               idB: event.idB
            }
          ]
        }
        let commande={
          quantite: this.size,
          boissonTailles: {
            id:event.boissontTaille.idB
          }
        }
        this.commandeMenuBoissonTailles.push(commande)
        this.many.push(object);
    }
    else{
      var trouve=false
      this.many.map(
        data=>{
          if(data.idTaille==event.idTaille){
            trouve=true
          }
        }
      )
      if(trouve == false){
        let object={
          idTaille:event.idTaille,
          qte:event.qte,
          boissons:[
            {
              idBoisson:event.boissonTaille.idBoisson,
               size:this.size,
               stock:event.boissonTaille.stock
            }
          ]
        }
        this.many.push(object);
      }
      else{

        this.many.map(
          data=>{
            if(data.idTaille==event.idTaille){
              let boissonsmany =
              {
                idBoisson:event.boissonTaille.idBoisson,
                size:this.size,
                stock:event.boissonTaille.stock
              }
              let manyBoisson:any[] = data.boissons
              let testvide = false
              manyBoisson.map(
                (bois,index)=>{
                  if(bois.idBoisson == event.boissonTaille.idBoisson){
                    testvide = true
                    data.boissons[index] = boissonsmany
                  }
                }
              )
              if(testvide==false){
                data.boissons.push(boissonsmany)
              }
            }
          }
        )
      }
    }
    //console.log(this.many)
    this.textAlert(this.many)
  }

  textAlert(many :any[]):string{
    let totalsize = 0
      many.forEach(element => {
      let manyBoissons:any[] = element.boissons
      manyBoissons.forEach(elem=>{
        totalsize+=elem.size
        if(totalsize > element.qte){
          this.text = "vous avez depasser le nombre de boissons"
          this.disabled_attr = true
        }
        else if(elem.size > elem.stock){
          this.text = "le stock est epuisé"
          this.disabled_attr = true
        }
        else{
          this.text = ""
          this.disabled_attr = false
        }
      })
    });
    return ""
  }

  parentControl2(event : any){
    if(this.many.length==0){
      let obj2={
        idBoisson:event.idBoisson,
        size:this.size,
        stock:event.stock
      }
      this.many.push(obj2)
    }
    else{
      var trouve=false
      this.many.map(
        data=>{
          if(data.idBoisson==event.idBoisson){
            trouve=true
          }
        }
      )
      if(trouve == false){
        let obj2={
          idBoisson:event.idBoisson,
          size:this.size,
          stock:event.stock
        }
        this.many.push(obj2)
      }
      else{
        this.many.map(data=>{
          data.size = event.size
        })
      }
    }
    // console.log(this.many)
    this.textAlert2(this.many)
  }

  textAlert2(many:any[]){
    many.forEach(element=>{
      if(element.size > element.stock){
          this.text2 = "stock epuisé"
          this.disabled_attr = true
      }
      else{
        this.text2=""
        this.disabled_attr = false
      }
    })
  }
}
