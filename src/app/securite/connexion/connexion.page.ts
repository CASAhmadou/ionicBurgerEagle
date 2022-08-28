import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../shared/models/user';
import { SessionLoginService } from '../shared/services/session-login.service';
import { TokenLoginService } from '../shared/services/token-login.service';
import { NgToastService } from 'ng-angular-popup';
import { StorageService } from '../shared/services/storage.service';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage implements OnInit {


  type:string
  placeholder:string
  constructor(private sessionLogin: SessionLoginService,private tok: TokenLoginService,
    private router:Router, private route: ActivatedRoute,
    private token: StorageService) { }


    async ngOnInit() {
      await this.token.defineDriver(IonicSecureStorageDriver);
      await this.token.create();
    }

  connect: User ={}

  send():void{
    this.sessionLogin.nameLogin(this.connect).subscribe(
      data => {
        this.tok.valueToken(data.token,data.id)
      }
      )
    }

}
function IonicSecureStorageDriver(IonicSecureStorageDriver: any) {
  throw new Error('Function not implemented.');
}

