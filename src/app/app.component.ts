import { Component } from '@angular/core';
import { TokenLoginService } from './securite/shared/services/token-login.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  isConnected=true
  constructor(private tokenLogin: TokenLoginService) {}
  ngOnInit(){
    this.isConnected= this.tokenLogin.onLogin()
  }

  deconnect(){
    // alert('ok')
    this.isConnected=false
    this.tokenLogin.supToken().then(value=>{
    })
  }
}
