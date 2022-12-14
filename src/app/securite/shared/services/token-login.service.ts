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
  isConnected: BehaviorSubject<boolean> = new BehaviorSubject(false)
  isClient: BehaviorSubject<boolean> = new BehaviorSubject(true)
  constructor(private router : Router, private storage: StorageService, private toast: NgToastService) { }

  valueToken(token:string,id:any):void{
    let tokInfo = this.getDecodedAccessToken(token)
      this.isConnected.next(true)
      console.log(this.isConnected)
      if (tokInfo.roles[0] == ["ROLE_CLIENT"]) {
        this.router.navigate(['catalogue'])
        this.toast.success({detail:"success",summary:"connexion reussie"})
      }
      if(tokInfo.roles[0] == ["ROLE_LIVREUR"]){
        this.router.navigate(['livreur'])
      }
      else{
        this.router.navigate(['/'])
        error => {
          console.log(error)
          this.toast.error({detail:"ERROR",summary:"login ou mot de passe incorrect"})
      }}
      this.storage.set(token,id)
  }

  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch(Error) {
      return null;
    }
  }

  //   token2 = this.storage.get('token').then((data) => {
//     var tokenI:string  = data;
//     var decoded: any = jwt_decode(tokenI);
//     if(decoded.roles[0] == ["ROLE_CLIENT"] ){
//         this.role = "client"
//     }
//      if(decoded.roles[0] == ["ROLE_LIVREUR"]){
//       this.role = "livreur"
//     }
// })

  clientAccess(token):boolean{
    let tokInfo = this.getDecodedAccessToken(token)
    // let tokInfo = this.storage.set('token','id')
    if (tokInfo.roles[0] == ["ROLE_CLIENT"]) {
      return true
    }
    return false
  }

  // haveAccess(){
  //   var loginToken= localStorage.getItem('token') || ''
  //   var _extractedToken=loginToken.split('.')[1]
  //   var _atobdata= atob(_extractedToken)
  //   var _finaldata=JSON.parse(_atobdata)

  //   if(_finaldata.roles[0]=="ROLE_CLIENT"){
  //     return true
  //   }
  //   return false
  // }

  //vues du gestionnaie
  // viewV():boolean{
  //   const gest = this.haveAccess()
  //   return gest
  // }

  onLogin():boolean{
    const token = this.storage.get('storage')
    return !! token
  }

  supToken(){
    this.storage.remove('token','id');
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
