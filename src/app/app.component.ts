import { Component } from '@angular/core';
import { TokenLoginService } from './securite/shared/services/token-login.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  isConnected:boolean=false
  constructor(private tokenLogin: TokenLoginService) {}
  ngOnInit(){
    this.tokenLogin.isConnected.asObservable().subscribe(data=>{
      // console.log(data);
      this.isConnected= data
    })
  }

  deconnect(){
    this.tokenLogin.isConnected.next(false)
    this.tokenLogin.supToken()
  }
}
