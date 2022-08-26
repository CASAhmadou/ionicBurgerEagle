import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { TokenLoginService } from 'src/app/securite/shared/services/token-login.service';
import { environment } from 'src/environments/environment';
import { Panier } from '../models/panier';

const url = environment.apiUrl
@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  private commandeUrl = `${url}/commandes`;
  private zoneUrl = `${url}/zones`
  private comClientUrl = `${url}/clients/2/commandes`;

  constructor(private http: HttpClient, private token: TokenLoginService) { }

  commandeEnregistre(panier:Panier){
    let authorizTok = {
      headers: new HttpHeaders({
        'content-Type': 'application/json',
        'Authorization':`Bearer ${this.token.ouToken()}`
      })
    }

    return this.http.post(this.commandeUrl,JSON.stringify(panier),authorizTok)
  }

  commandeClient(){
    let authorizTok = {
      headers: new HttpHeaders({
        'content-Type': 'application/json',
        'Authorization':`Bearer ${this.token.ouToken()}`
      })
    }
    return this.http.get<any>(this.comClientUrl,authorizTok).pipe(
      map(data=>{
        let test = data['hydra:member']
        data = test
        return data
      })
    )
  }

  commandeDetail(id:any,token:any){
    let authorizTok = {
      headers: new HttpHeaders({
        'content-Type': 'application/json',
        'Authorization':`Bearer ${this.token.ouToken()}`
      })
    }
    return this.http.get<any>(`${this.commandeUrl}/${id}`,authorizTok)
    // .pipe(
    //   map(data=>{
    //     let test = data['hydra:member']
    //     data = test
    //     return data
    //   })
    // )
  }

  zoneAll(){
    return this.http.get<any>(this.zoneUrl).pipe(
      map(data=>{
        let test = data['hydra:member']
        data = test
        return data
      })
    )
  }
}
