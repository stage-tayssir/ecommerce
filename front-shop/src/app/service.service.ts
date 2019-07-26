import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

baseurl = "http://127.0.0.1:8000";
httpHeaders = new HttpHeaders({'Content-Type':'application/json'});
 
 constructor(private http: HttpClient ) { } 

getAllcars(): Observable<any>{
  return this.http.get(this.baseurl + '/marketplace/', 
  {headers : this.httpHeaders});
}

getOneCar(id): Observable <any>{
  return this.http.get(this.baseurl + '/marketplace/' + id + '/',
  {headers: this.httpHeaders});
}
 


}
