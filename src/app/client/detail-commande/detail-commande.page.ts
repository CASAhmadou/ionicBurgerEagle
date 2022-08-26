import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageService } from 'src/app/securite/shared/services/storage.service';
import { CommandeService } from 'src/app/shared/services/commande.service';

@Component({
  selector: 'app-detail-commande',
  templateUrl: './detail-commande.page.html',
  styleUrls: ['./detail-commande.page.scss'],
})
export class DetailCommandePage implements OnInit {

  constructor(private routeActive: ActivatedRoute, private router: Router,private comService: CommandeService, private storage: StorageService) { }
  id:any=0
  token:any
  somme:any
  detCommandes:any[]=[]

  ngOnInit(): void {
    this.id= this.routeActive.snapshot.paramMap.get('id');
    let token = this.storage.get('token')
    this.comService.commandeDetail(this.id,token).subscribe(data=>{
      console.log(data)
      this.somme = data.montantCommande
      this.detCommandes = [...data.burgerCommandes,...data.menuCommandes,...data.boissonCommandes,...data.friteCommandes]
    })
  }

  recommande(){
    this.router.navigateByUrl(`client/detail-commande`)
  }

  detailCommande(){

  }

}
