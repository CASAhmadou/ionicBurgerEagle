import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageService } from '../securite/shared/services/storage.service';
import { LivraisonService } from '../shared/services/livraison.service';

@Component({
  selector: 'app-livreur',
  templateUrl: './livreur.page.html',
  styleUrls: ['./livreur.page.scss'],
})
export class LivreurPage implements OnInit {
  filtreDate:string
  filtreEtat:string
  id:any
  token:any
  livrables:any[]=[]
  constructor(private livraisonServ: LivraisonService,private storage: StorageService ,private router: Router, private route: ActivatedRoute) { }

  async ngOnInit() {
    await this.storage.get('id').then((data)=>{
      this.id=data
    })
    await this.storage.get('token').then((data)=>{
      this.token=data
    })
    this.livraisonServ.commandeByLivreur(this.token).subscribe(data=>{
      this.livrables= data.filter(li=>li.livreur.id === this.id)
      console.log(this.livrables)
    })
  }

}
