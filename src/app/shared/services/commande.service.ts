import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { StorageService } from 'src/app/securite/shared/services/storage.service';
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
  private comClientUrl = `${url}/clients`;

  constructor(private http: HttpClient, private token: TokenLoginService, private storage: StorageService) { }

  commandeEnregistre(panier:Panier){
    // let authorizTok = {
    //   headers: new HttpHeaders({
    //     'content-Type': 'application/json',
    //     'Authorization':`Bearer ${this.token.ouToken()}`
    //   })
    // }
    return this.http.post(this.commandeUrl,JSON.stringify(panier))
  }

  commandeClient(id:any,token:any){
    return this.http.get<any>((`${this.comClientUrl}/${id}/commandes`)).pipe(
      map(data=>{
        let test = data['hydra:member']
        data = test
        return data
        console.log(data);

      })
    )
  }

  commandeDetail(id:any,token:any){
    return this.http.get<any>(`${this.commandeUrl}/${id}`)
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
