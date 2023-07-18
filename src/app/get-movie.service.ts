import {HttpClient  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetMovieService {
  imgBaseUrl: string = 'https://image.tmdb.org/t/p/original'

  getTrendingMovies(mediaTybe:string):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${mediaTybe}/day?api_key=75a674c60d4a4b3d0a2187f8c9cdcc45`)
  }
  getMovieDetails(mediaTybe:string,id:Number):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/${mediaTybe}/${id}?api_key=75a674c60d4a4b3d0a2187f8c9cdcc45`)  
  }
  getTrendingMoviesPages(mediaType:string,pageNumber:number):Observable<any>
  {
     return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=75a674c60d4a4b3d0a2187f8c9cdcc45&page=${pageNumber}`)
  }


constructor(private _HttpClient:HttpClient) { }
}
