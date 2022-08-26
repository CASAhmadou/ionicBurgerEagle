import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../shared/models/user';
import { SessionLoginService } from '../shared/services/session-login.service';
import { TokenLoginService } from '../shared/services/token-login.service';
import { NgToastService } from 'ng-angular-popup';
import { StorageService } from '../shared/services/storage.service';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage implements OnInit {

  type:string
  placeholder:string
  constructor(private sessionLogin: SessionLoginService,private tok: TokenLoginService,
    private router:Router, private route: ActivatedRoute, private toast: NgToastService,
    private token: StorageService) { }


    async ngOnInit() {
      await this.token.defineDriver(IonicSecureStorageDriver);
      await this.token.create();
    }

  connect: User ={}

  send():void{
    this.sessionLogin.nameLogin(this.connect).subscribe(
      data => {
        // console.log(data.id)
        this.tok.valueToken(data.token)
        this.toast.success({detail:"success",summary:"connexion reussie"})

      },
        error => {
          console.log(error)
        this.toast.error({detail:"ERROR",summary:"login ou mot de passe incorrect"})
}
    )}

}
function IonicSecureStorageDriver(IonicSecureStorageDriver: any) {
  throw new Error('Function not implemented.');
}

