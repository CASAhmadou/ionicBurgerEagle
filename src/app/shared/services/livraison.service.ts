import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TokenLoginService } from 'src/app/securite/shared/services/token-login.service';
import { environment } from 'src/environments/environment';


const url = environment.apiUrl
@Injectable({
  providedIn: 'root'
})
export class LivraisonService {

  private commandeUrl: string = `${url}/http://127.0.0.1:8000/api/commandes`

  private commandeEditUrl = 'http://127.0.0.1:8000/api/commandes'

  private commandeZoneUrl: string = 'http://127.0.0.1:8000/api/zones'

  private livraisonEditUrl:string = 'http://127.0.0.1:8000/api/livraisons'

  private livraisonLivreurUrl:string = 'http://127.0.0.1:8000/api/livraisons'

  private livrerCommandeUrl:string = `${url}/livraisons`

  constructor(
    private http:HttpClient,
    private token : TokenLoginService
  ) { }

  commandeByLivreur(token:any){
    const authorizTok = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${this.token.ouToken()}`
      })
    };
    return this.http.get<any>(this.livrerCommandeUrl,authorizTok)
    .pipe(
      map(data=>{
        // console.log(data)
        let test = data['hydra:member']
        data = test
        return data
      }
      ))
  }

  /* all commande */
  commandeAll(){
    const authorizTok = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${this.token.ouToken()}`
      })
    };
    return this.http.get<any>(this.commandeUrl,authorizTok)
    .pipe(
      map(data=>{
        let test = data['hydra:member']
        data = test
        return data
      }
      ))
  }

  /* commandes par zones */
  commandesZone(idZone:number){
    const authorizTok = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${this.token.ouToken()}`
      })
    };
    return this.http.get<any>((`${this.commandeZoneUrl}/${idZone}/commandes`),authorizTok)
    .pipe(
      map(data=>{
        let test = data['hydra:member']
        data = test
        return data
      }
      ))
  }

  /* liste des livreurs */
  // livreurAll(){
  //   const authorizTok = {
  //     headers: new HttpHeaders({
  //       'Content-Type':  'application/json',
  //       'Authorization': `Bearer ${this.token.ouToken()}`
  //     })
  //   };
  //   return this.http.get<any>(this.livreurUrl,authorizTok)
  //   .pipe(
  //     map(data=>{
  //       let test = data['hydra:member']
  //       data = test
  //       return data
  //     }
  //     ))
  // }

  /* fonction modif etat commande */
  // commandeAnnuler (id:any,etat:string):Observable<number>{
  //   const authorizTok = {
  //     headers: new HttpHeaders({
  //       'Content-Type':  'application/json',
  //       'Authorization': `Bearer ${this.token.ouToken()}`
  //     })
  //   }
  //   const body = {"etat": etat}
  //   return this.http.put<number>(this.commandeEditUrl+"/"+id,body,authorizTok);
  // }

  /* liste des livraisons  */
  // livraisonAll(){
  //   const authorizTok = {
  //     headers: new HttpHeaders({
  //       'Content-Type':  'application/json',
  //       'Authorization': `Bearer ${this.token.ouToken()}`
  //     })
  //   };
  //   return this.http.get<any>(this.livraisonUrl,authorizTok)
  //   .pipe(
  //     map(data=>{
  //       let test = data['hydra:member']
  //       data = test
  //       return data
  //     }
  //     ))
  // }

  /* commandes d une livraison */
  // commandeByLivraison(id:any){
  //   const authorizTok = {
  //     headers: new HttpHeaders({
  //       'Content-Type':  'application/json',
  //       'Authorization': `Bearer ${this.token.ouToken()}`
  //     })
  //   };
  //   return this.http.get<any>(`${this.livraisonCommandeUrl}/${id}/commandes`,authorizTok)
  //   .pipe(
  //     map(data=>{
  //       console.log(data)
  //       let test = data['hydra:member']
  //       data = test
  //       return data
  //     }
  //     ))
  // }

  /* liste des zones */
  zoneAll(){
    const authorizTok = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${this.token.ouToken()}`
      })
    };
    return this.http.get<any>(this.commandeZoneUrl,authorizTok)
    .pipe(
      map(data=>{
        let test = data['hydra:member']
        data = test
        return data
      }
      ))
  }
  /* valider livraison */
  validerLivraison (id:any,etat:string):Observable<number>{
    const authorizTok = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': `Bearer ${this.token.ouToken()}`
      })
    }
    const body = {"etat": etat}
    return this.http.put<number>(this.livraisonEditUrl+"/"+id,body,authorizTok);
  }
}
