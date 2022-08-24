import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenLoginService } from './token-login.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authService=this.injector.get(TokenLoginService)
    let jwtToken=req.clone({
      setHeaders:{
        Authorization: 'bearer' + authService.ouToken()
      }
    });
    return next.handle(jwtToken)
}

constructor(private injector:Injector) { }
}
