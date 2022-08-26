import { BoissonTailleBoisson } from "./detail"
import { Produit } from "./produits"

export interface Panier {
  commandeBurgers?: BurgerCommande[]
  commandeMenus?: MenuCommande[]
  commandeBoissons?:CommandeBoisson[]
  commandeFrites?:CommandeFrite[]
  zones?:Zone
}

export interface BurgerCommande{
  burger?: Produit
  quantite:number
}

export interface MenuCommande{
  menu?: Menu
  quantite:number
}

export interface Menu{
  id: number
  nom?:string
  image?:Blob
  type?:string
  prix?:number
  commandeMenuBoissonTailles:CommandeMenuBoissonTaille[]
}

export interface CommandeMenuBoissonTaille{
  quantite?:number
  tailleBoissons?: BoissonTailleBoisson
}

export interface CommandeBoisson{
  quantite?:number
  boissonTailleBoisson?:BoissonTailleBoisson
}

export interface CommandeFrite{
  quantite?:number
  portionFrite?: Produit
}

export interface Zone{
  id?:number
  libelle?:string
  prix?:string
}
