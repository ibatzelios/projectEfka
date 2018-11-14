import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

import { user } from '../models/userModel';

import { Observable } from 'rxjs';
import { map, catchError } from "../../../node_modules/rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UserService {
private baseUrl:string = 'http://localhost:8080';
 constructor(private http: HttpClient) { }
 
 login(user: user){
 	localStorage.setItem('token', 'true');
 	let headers = new HttpHeaders();
    headers.append('Content-type', 'application/json');
    return this.http
    .post(this.baseUrl +'/login', {user},{headers})
    .pipe(
      map(res => res)
    );
 }

  register(user: user):Observable<any>{
    let headers = new HttpHeaders();
    headers.append('Content-type', 'application/json');
    return this.http
    .post(this.baseUrl +'/register', user,{headers})
    .pipe(
      map(res => res),
      catchError((err)=>{
        return err;
      })
    );
  }
}
