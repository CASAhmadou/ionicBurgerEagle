import { Produit } from "./produits"

export interface Detail{
    id?:number
    menu?:Menu
    burger?:Menu
    portionFrites?:Produit[]
    tailleBoissons?:TailleBoisson[]
}

export interface Menu{
    id?:number
    nom?:string
    prix?:number
    etat?:string
    description?:string
    type?:string
    image?:Blob
    catalogue?:string
    menuBurgers?:MenuBurger
    menuPortionFrites?:MenuPortion[]
    menuTailleBoissons?:MenuTailleBoisson[]
}

export interface MenuTailleBoisson{
    quantite?:number
    tailleBoisson?:TailleBoissonMenu
}

export interface TailleBoisson{
    id?:number
    prix?:number
    libelle?:string
    boissonTailleBoissons?:BoissonTailleBoisson[]
}

export interface TailleBoissonMenu{
    id?:number
    prix?:number
    libelle?:string
    boissonTailleBoissons?:BoissonTailleBoisson[]
}

export interface BoissonTailleBoisson{
    id?:number
    stock?:string
    boisson?: Produit
}

export interface MenuBurger{
  quantite?:number
  burger?:Produit
}

export interface MenuPortion{
  quantite?:number
  portionFrite?:Produit
}
