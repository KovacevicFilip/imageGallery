import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  private REST = "https://jsonplaceholder.typicode.com/photos";

  constructor(private httpClient: HttpClient) { }
  public sendGetRequest(){
    return this.httpClient.get(this.REST);
  }
}
