import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BurgerCommande, CommandeBoisson, CommandeFrite, MenuCommande, Panier } from '../models/panier';
import { Produit } from '../models/produits';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  private panier: Panier = {
    commandeBurgers: [],
    commandeMenus: [],
    commandeBoissons: [],
    commandeFrites: []
  }

  behav = new BehaviorSubject<Panier>(this.panier)

  cart: Produit[]=[]
  item$ = this.behav.asObservable();


  constructor() {
    let list= JSON.parse(localStorage.getItem('cart') || 'null')
   if (list) {
     this.behav.next(list)
   }
 }


 ajoutMenu(menuCommande:MenuCommande) {
  // let list= JSON.parse(localStorage.getItem('cart') || 'null')
  let valide=false
  this.behav.value.commandeMenus?.map(comMenu=>{
    if(comMenu.menu?.id == menuCommande.menu?.id){
        valide = true
        Number(comMenu.quantite += menuCommande.quantite)
    }
    return comMenu
  })
  if(!valide){
    const list= JSON.parse(localStorage.getItem('cart') || 'null')
    let newData = {
      ...this.behav.value,
      commandeMenus: this.behav.value.commandeMenus?.concat(menuCommande)
    }
    localStorage.setItem('cart', JSON.stringify(newData))
    return this.behav.next(newData)
  }
  else{
     const list= JSON.parse(localStorage.getItem('cart') || 'null')
     let newData = {
      ...this.behav.value,
      commandeMenus: this.behav.value.commandeMenus
    }
    localStorage.setItem('cart', JSON.stringify(newData))
    return this.behav.next(newData)
  }

}

ajoutBurger(burger:BurgerCommande){
  // let list= JSON.parse(localStorage.getItem('cart') || 'null')
  let valide=false
  this.behav.value.commandeBurgers?.map(burgerCommande=>{
    if(burgerCommande.burger?.id == burger.burger?.id){
      valide = true
      Number(burgerCommande.quantite += burger.quantite)
    }
    return burgerCommande
  })
  if (!valide){
    const list= JSON.parse(localStorage.getItem('cart') || 'null')
    let newData = {
        ...this.behav.value,
        commandeBurgers: this.behav.value.commandeBurgers?.concat(burger)
    }
      localStorage.setItem('cart', JSON.stringify(newData))
      return this.behav.next(newData)
  }
  else{
    const list= JSON.parse(localStorage.getItem('cart') || 'null')
    // console.log(ls)
    let newData = {
        ...this.behav.value,
        commandeBurgers: this.behav.value.commandeBurgers
    }
      localStorage.setItem('cart', JSON.stringify(newData))
       this.behav.next(newData)
  }

}

/* montant total panier */
getTotalPrice(){
  let grandTotal = 0
  this.behav.value.commandeMenus?.map(menuCom=>{
    if(menuCom?.menu?.prix)
    grandTotal += Number( menuCom?.menu?.prix * menuCom.quantite)
  })
  this.behav.value.commandeBurgers?.map(burgerCommande=>{
    if(burgerCommande.burger?.prix)
    grandTotal += Number( burgerCommande?.burger?.prix * burgerCommande.quantite)
  })
  return grandTotal
}

/* suppression d un element du panier */
removeCart(object:any){
  if(object.type == 'menu'){
    this.behav.value.commandeMenus?.map((menuCom,index)=>{
      if(menuCom.menu?.id == object.id){
        this.behav.value.commandeMenus?.splice(index,1)
    }
    })
    const ls = JSON.parse(localStorage.getItem('cart') || 'null')
    let newData = {
      ...this.behav.value,
      commandeMenus: this.behav.value.commandeMenus
    }
    localStorage.setItem('cart', JSON.stringify(newData))
    return this.behav.next(newData)
  }
  if(object.type == 'burger'){
    this.behav.value.commandeBurgers?.map((burgerCom,index)=>{
      if(burgerCom.burger?.id == object.id){
        this.behav.value.commandeBurgers?.splice(index,1)
    }
    })
    const ls = JSON.parse(localStorage.getItem('cart') || 'null')

    let newData = {
        ...this.behav.value,
        commandeBurgers: this.behav.value.commandeBurgers
    }
      localStorage.setItem('cart', JSON.stringify(newData))
       this.behav.next(newData)

  }
  return this.behav.next
}
removeAllCart(){
  localStorage.removeItem('cart')
  window.location.reload()
}

/* boisson commande */
ajoutBoisson(boissonCommande:CommandeBoisson){
  const ls = JSON.parse(localStorage.getItem('cart') || 'null')
    let newData = {
      ...this.behav.value,
      commandeBoissons: this.behav.value.commandeBoissons?.concat(boissonCommande)
    }
    localStorage.setItem('cart', JSON.stringify(newData))
    return this.behav.next(newData)
}

/* frites commande */
ajoutFrite(friteCommande:CommandeFrite){
  const ls = JSON.parse(localStorage.getItem('cart') || 'null')
    let newData = {
      ...this.behav.value,
      friteCommandes: this.behav.value.commandeFrites?.concat(friteCommande)
    }
    localStorage.setItem('cart', JSON.stringify(newData))
    return this.behav.next(newData)
}
}
