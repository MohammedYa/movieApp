import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {HttpClient  } from '@angular/common/http';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private _HttpClient:HttpClient,private  _Router:Router) {
    if(localStorage.getItem("userToken")!=null){
      this.saveUserData()
    }
   }

user=new BehaviorSubject(null)

saveUserData(){
  let encodedToken = localStorage.getItem("userToken")
  let userDecod:any= jwtDecode(<string>encodedToken)
  this.user.next(userDecod)
  
}
register(userData:object):Observable<any>
{
  return this._HttpClient.post("https://route-ecommerce.onrender.com/api/v1/auth/signup",userData);
}
login(userData:object):Observable<any>
{
  return this._HttpClient.post("https://route-ecommerce.onrender.com/api/v1/auth/signin",userData);
}
  logout(){
    localStorage.removeItem("userToken")
    this.user.next(null)  
    this._Router.navigate(['/login'])

  }
}
