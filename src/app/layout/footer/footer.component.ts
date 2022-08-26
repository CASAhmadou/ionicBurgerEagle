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
  isConnected=false
  isClient=true
  ngOnInit() {
    this.tokenLogin.isConnected.asObservable().subscribe(data=>{
      this.isConnected= data
    })
  }

  mesCommandes(): void{
    this.router.navigateByUrl(`client`)
  }

}
