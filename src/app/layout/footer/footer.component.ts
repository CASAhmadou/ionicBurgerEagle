import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenLoginService } from 'src/app/securite/shared/services/token-login.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

  constructor(private router: Router,private tokenLogin: TokenLoginService) { }
  isConnected=true
  isClient=true
  ngOnInit() {
    this.isConnected= this.tokenLogin.onLogin()
  }

  mesCommandes(): void{
    this.router.navigateByUrl(`client`)
  }

}
