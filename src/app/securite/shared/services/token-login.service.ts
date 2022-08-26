import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from "jwt-decode"
import { NgToastService } from 'ng-angular-popup';
import { BehaviorSubject } from 'rxjs';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class TokenLoginService {
  isConnected: BehaviorSubject<boolean>=new BehaviorSubject(false)
  constructor(private router : Router, private storage: StorageService, private toast: NgToastService) { }

  //garde token
  valueToken(token:string):void{
    let tokInfo = this.getDecodedAccessToken(token)
      this.isConnected.next(true)
      if (tokInfo.roles[0] == ["ROLE_CLIENT"]) {
        this.router.navigate(['catalogue'])
        this.toast.success({detail:"success",summary:"connexion reussie"})
      }else{
        this.router.navigate(['/'])
        error => {
          console.log(error)
        this.toast.error({detail:"ERROR",summary:"login ou mot de passe incorrect"})
        }
      }
      this.storage.set('token', token)
  }

  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch(Error) {
      return null;
    }
  }

  haveAccess(){
    // let tokInfo = this.getDecodedAccessToken(token)
    var loginToken= this.storage.get('storage')
    var _extractedToken=loginToken.then(res=>{

    })
    // var _extractedToken=loginToken.split('.')[1]
    // var _atobdata= atob(_extractedToken)
    // var _finaldata=JSON.parse(_atobdata)

    // if(_finaldata.roles[0]=="ROLE_CLIENT"){
    //   return true
    // }
    return false
  }

  //vues du gestionnaie
  // viewV():boolean{
  //   const gest = this.haveAccess()
  //   return gest
  // }

  onLogin():boolean{
    const token = this.storage.get('storage')
    return !! token
  }

  async supToken():Promise<void>{
    await this.storage.remove('token');
    this.router.navigate(['/'])
  }

  ouToken():any{
    let token = this.storage.get('storage')
    return token
  }

  // getId():any{
  //   const id= localStorage.getItem('id')
  //   // console.log(id)
  //   return Number(id)
  // }
}
