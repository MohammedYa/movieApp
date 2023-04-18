import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {HttpClient  } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private _HttpClient:HttpClient,private  _Router:Router) { }

user=new BehaviorSubject(null)

 
  register(registerData:any):Observable<any>
  {
    return this._HttpClient.post('https://sticky-note-fe.vercel.app/signup',registerData)
  }
  login(DataforLogin:any):Observable<any>{
    return this._HttpClient.post('https://sticky-note-fe.vercel.app/signin',DataforLogin)
  }
}
