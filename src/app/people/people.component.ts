import { Component, OnInit } from '@angular/core';
import { GetMovieService } from '../get-movie.service';
GetMovieService
@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  peopleList: any[] = [];
  imgBaseUrl: string = ''
  term:string = ''
getPerson(){
  this._GetMovieService.getTrendingMovies('person').subscribe((res)=>{
    this.peopleList = res.results
  })
}
getPage(eve:any){
  this._GetMovieService.getTrendingMoviesPages("person",eve.target.innerHTML).subscribe(
    (res)=>{
      this.peopleList = res.results
      
    }
  )
  
}
  constructor(private _GetMovieService:GetMovieService){
 this.imgBaseUrl=this._GetMovieService.imgBaseUrl
  }
  ngOnInit(): void {
    this.getPerson()
  }
}
