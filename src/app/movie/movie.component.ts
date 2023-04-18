import { Component, OnInit } from '@angular/core';
import { GetMovieService } from '../get-movie.service';

GetMovieService

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit{
  moviesList: any[] = [];
  imgBaseUrl: string = ''
  term:string = ''
getMovie(){
  this._GetMovieService.getTrendingMovies('movie').subscribe((res)=>{
    this.moviesList = res.results
  })
}




  constructor(private _GetMovieService:GetMovieService){
   this.imgBaseUrl= this._GetMovieService.imgBaseUrl
  }
  ngOnInit(): void {
    this.getMovie()
  }

}
