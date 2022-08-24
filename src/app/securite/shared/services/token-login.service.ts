import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from "jwt-decode"
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class TokenLoginService {

  constructor(private router : Router, private storage: StorageService) { }

  //garde token
  valueToken(token:string):void{
    let tokInfo = this.getDecodedAccessToken(token)
    // console.log(tokInfo)
      if (tokInfo.roles[0] == ["ROLE_CLIENT"]) {
        this.router.navigate(['catalogue'])
      }else{
        this.router.navigate(['livreur'])
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

  //vues du gestionnaie
  // viewGestionnaire():boolean{
  //   const gest = this.haveAccess()
  //   return gest
  // }

  onLogin():boolean{
    const token = this.storage.get('storage')
    return !! token
  }

  supToken():void{
    localStorage.
    this.router.navigate(['/'])
  }

  ouToken():any{
    let token = this.storage.get('storage')
    return token
  }

  haveAccess(){
    var loginToken= this.storage.get('storage') || ''
    // var _extractedToken=loginToken.split('.')[1]
    // var _atobdata= atob(_extractedToken)
    // var _finaldata=JSON.parse(_atobdata)

    // if(_finaldata.roles[0]=="ROLE_CLIENT"){
    //   return true
    // }
    // return false
  }

  getId():any{
    const id= localStorage.getItem('id')
    // console.log(id)
    return Number(id)
  }
}
