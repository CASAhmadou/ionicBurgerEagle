import { Pipe, PipeTransform } from '@angular/core';
import { Commande } from '../models/commande';

@Pipe({
  name: 'commandeEtatFilter'
})
export class CommandeEtatFilter implements PipeTransform {

  transform(commandes: Commande[], etatFiltre: string) {
    if(!commandes || !etatFiltre){
        return commandes
    }
    return commandes.filter(commande => commande.etat?.toLowerCase().indexOf(etatFiltre.toLowerCase()) !== -1);
  }
}

@Pipe({
name:'commandeDateFilter'
})
export class CommandeDateFilter implements PipeTransform{
transform(commandes: Commande[], dateFiltre: any) {
    if(!commandes || !dateFiltre){
        return commandes
    }
    return commandes.filter((commande:any) => {
        const date = new Date(commande.dateCommande)
        return date.toLocaleDateString() == new Date(dateFiltre).toLocaleDateString()
    });
  }
}
