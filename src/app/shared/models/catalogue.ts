import { Produit } from "./produits";

export interface Catalogue {
  burgers: Produit[]
  menus: Produit[]
  produits?: Produit[]
}
