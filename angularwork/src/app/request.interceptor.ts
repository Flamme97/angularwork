import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    console.log('interceptor request', request);
    // this token get inserted in the request
    
    // here we do it onlyh when it's POST request to the backend
    if (request.method === 'POST') {
      const newRequest = request.clone({
        headers: new HttpHeaders({ token: '1231241241dasd' }),
      });
      return next.handle(newRequest);
    }
    return next.handle(request);
  }
}
