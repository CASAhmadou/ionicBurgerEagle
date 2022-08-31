import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from '../securite/shared/services/storage.service';
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
  id:any
  token:any

  etatSearch:any
  dateSearch:any
  filtreEtat:string="en cours"
  filtreDate=""

  constructor(private comService : CommandeService, private router: Router, private storage: StorageService) { }

  async ngOnInit() {
    await this.storage.get('id').then((data)=>{
      this.id=data
      console.log(this.id);

    })
    await this.storage.get('token').then((data)=>{
      this.token=data
      console.log(this.token);

    })
    this.comService.commandeClient(this.id,this.token).subscribe(data=>{
      this.commandes= data
      console.log(this.commandes)
    })
  }

  detailCommande(){
    this.router.navigateByUrl(`client/detail-commande`)
  }
}


//tous les commandes
  // async ngOnInit(){
  //   await
    // this.comService.commandeClient().subscribe(data=>{
    //   this.commandes = data
    //   this.lenghTotal = this.commandes.length
    //   return data
    // })
  // }
