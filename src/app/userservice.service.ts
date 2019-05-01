import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(public http: HttpClient) { }

  public getUserInformation(){
    //return is important here to get response from observable
    return this.http.get("https://conduit.productionready.io/api/profiles/eric");
  }
}
