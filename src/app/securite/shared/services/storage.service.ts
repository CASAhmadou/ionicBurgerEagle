import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { JwtHelperService } from "@auth0/angular-jwt";
import { BehaviorSubject, from, Observable } from 'rxjs';
import { take, map, switchMap } from 'rxjs/operators'

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

  private _storage: Storage | null = null
  constructor(private storage: Storage, private http: HttpClientModule,
    private plt: Platform, private router: Router) {
    this.init()
   }

   behav= new BehaviorSubject<any>(false);
   verified(){
    return this.behav.asObservable()
   }

  async init(){
    const storage = await this.storage.create();
    this._storage= storage
  }

  public set(key:string, value:any){
    this._storage?.set(key, value)
  }

  public async get(token:any){
    return this.storage
  }

  remove(token){
    this.storage.remove(token)
  }

  async addData(token,id){
    await  this.storage.set('token', token)
    await this.storage.set('id', id)
 }
}
