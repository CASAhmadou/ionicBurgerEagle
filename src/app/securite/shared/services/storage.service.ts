import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { JwtHelperService } from "@auth0/angular-jwt";
import { BehaviorSubject, from, Observable } from 'rxjs';
import { take, map, switchMap } from 'rxjs/operators'

const helper= new JwtHelperService();
const TOKEN_KEY= 'jwt-token'
@Injectable({
  providedIn: 'root'
})
export class StorageService {
  create() {
    throw new Error('Method not implemented.');
  }
  defineDriver(IonicSecureStorageDriver: any) {
    throw new Error('Method not implemented.');
  }

  public user: Observable<any>;
  private userData= new BehaviorSubject(null);

  private _storage: Storage | null = null
  constructor(private storage: Storage, private http: HttpClientModule,
    private plt: Platform, private router: Router) {
    this.init()
   }

  async init(){

    const storage = await this.storage.create();
    this._storage= storage
  }

  public set(key:string, value:any){
    this._storage?.set(key, value)
  }

  public async get(storage:any){
    return this.storage
  }
}
