import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Catalogue } from '../models/catalogue';

const url = environment.apiUrl
@Injectable({
  providedIn: 'root'
})
export class CatalogueService {

  private linkBackEnd: string = `${url}/catalogues`

  constructor(private http: HttpClient){}

  getCatalogue(): Observable<Catalogue>{
    return this.http.get<any>(this.linkBackEnd).pipe(
      map(data=>{
        let catalogues: Catalogue= {
          burgers: data['hydra:member'][0]['burgers'],
          menus: data['hydra:member'][1]['menus'],
        }
        return catalogues
      })
    )
  }

}
