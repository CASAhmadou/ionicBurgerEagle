import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Commande } from '../shared/models/commande';
import { CommandeService } from '../shared/services/commande.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.page.html',
  styleUrls: ['./client.page.scss'],
})
export class ClientPage implements OnInit {

  commandes$: Observable<Commande> | any = null
  lenghTotal: number = 0
  i:number=1
  commandes: any[]=[]
  etatSearch:any
  dateSearch:any

  constructor(private comService : CommandeService, private router: Router) { }

  ngOnInit(): void {
    this.comService.commandeClient().subscribe(data=>{
      this.commandes = data
      this.lenghTotal = this.commandes.length
      return data
    })
  }

  detailCommande(){
    this.router.navigateByUrl(`client/detail-commande`)
  }
}
