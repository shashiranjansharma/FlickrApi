import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class HttpServerServices {

  constructor(private http: Http) {}
  getRequest(myUrl){
    return this.http.get(myUrl);
  }
}
