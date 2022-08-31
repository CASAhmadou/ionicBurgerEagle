import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenLoginService } from '../securite/shared/services/token-login.service';

@Injectable({
  providedIn: 'root'
})
export class ClientGuard implements CanActivate {

  constructor(private token:TokenLoginService, private router: Router ){}
  canActivate() {
  //   if(!this.token.clientAccess())
  //   return true;
  //  else{
  //    this.router.navigate(['commande/liste'])
     return false
  //  }
  }
}
