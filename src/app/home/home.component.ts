import { Component, OnInit } from '@angular/core';
import { GetMovieService } from '../get-movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  moviesList: any[] = [];
  tvshowsList: any[] = [];
  peopleList: any[] = [];
  imgBaseUrl: string = '';
  getTrindinMovies(){
    this._GetMovieService.getTrendingMovies("movie").subscribe((data)=>{
      this.moviesList=data.results.slice(0,10);
    })
  }
  getTrindinTv(){
    this._GetMovieService.getTrendingMovies("tv").subscribe((data)=>{

      this.tvshowsList=data.results.slice(0,10);
    })
  }
  getTrindinPeople(){
    this._GetMovieService.getTrendingMovies("person").subscribe((data)=>{
      
      this.peopleList=data.results.slice(0,10);
    })
  }

  
  
  constructor(private _GetMovieService:GetMovieService){
    this.imgBaseUrl = _GetMovieService.imgBaseUrl;

  }
  
  ngOnInit(): void {
    this.getTrindinMovies();
    this.getTrindinTv();
    this.getTrindinPeople();
  }
}
