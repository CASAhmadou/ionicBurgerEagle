import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StorageService } from 'src/app/securite/shared/services/storage.service';
import { Commande } from 'src/app/shared/models/commande';
import { CommandeService } from 'src/app/shared/services/commande.service';

@Component({
  selector: 'app-code-qr',
  templateUrl: './code-qr.page.html',
  styleUrls: ['./code-qr.page.scss'],
})
export class CodeQrPage implements OnInit {

  qrCode:any ="test qr code"
  id:any
  token:any

  constructor(
    private comServ:CommandeService,
    private route: ActivatedRoute,
    private storage:StorageService
  ) { }

  async ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    let token =  await this.storage.get('token')
     this.comServ.commandeDetail(this.id,token).subscribe((data:Commande)=>{
       this.qrCode = data.id
       console.log(this.qrCode);
     })
  }


}
