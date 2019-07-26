import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccessoiresService {

  constructor(private http : HttpClient) { }
  baseurl = "http://127.0.0.1:8000";
  httpheaders = new HttpHeaders( {'content-Type':'application/json'} );
  getAllAccessoire(): Observable <any>{
    return this.http.get(this.baseurl + '/Accessoires/',
    {headers: this.httpheaders});
  }
  getOneAccessoire(id): Observable <any>{
    return this.http.get(this.baseurl + '/Accessoires/' + id + '/',
    {headers: this.httpheaders});
  }






}
