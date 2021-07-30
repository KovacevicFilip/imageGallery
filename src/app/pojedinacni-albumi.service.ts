import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PojedinacniAlbumiService {
    private REST_API = "https://jsonplaceholder.typicode.com/photos";

  constructor(private http: HttpClient) { }
  public sendGetRequest(){
    return this.http.get(this.REST_API);    
    
  }
}
