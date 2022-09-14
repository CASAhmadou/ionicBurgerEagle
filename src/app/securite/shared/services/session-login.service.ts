import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Token, User } from '../models/user';
import { environment } from 'src/environments/environment';

const url = environment.apiUrl
@Injectable({
  providedIn: 'root'
})
export class SessionLoginService {

  private login_check = `${url}/login_check`

  constructor(private http:HttpClient) { }

  nameLogin(users: User): Observable<Token>{
    return this.http.post<Token>(this.login_check, users )
  }
}
