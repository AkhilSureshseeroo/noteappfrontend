import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { registerLocaleData } from '@angular/common';
const AUTH_API='http://localhost:5000/users/';
const httpOptions={
  headers: new HttpHeaders({'Content-Type':'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  login(username:string,password:string):Observable<any>{
    return this.http.post(AUTH_API + 'Login',{
      username,
      password
    },httpOptions);

  }
  register(username:string,userphone:string,password:string):Observable<any>{
    return this.http.post(AUTH_API + 'Register',{
      username,
      userphone,
      password
    },httpOptions)
  }
}
