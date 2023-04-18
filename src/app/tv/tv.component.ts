import { Component, OnInit } from '@angular/core';
import { GetMovieService } from '../get-movie.service';
GetMovieService
@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent implements OnInit {
  tvList: any[] = [];
  imgBaseUrl: string = ''
  term:string = ''
getTv(){
  this._GetMovieService.getTrendingMovies('tv').subscribe((res)=>{
    this.tvList = res.results
  })
}
constructor(private _GetMovieService:GetMovieService){
  this.imgBaseUrl=this._GetMovieService.imgBaseUrl
}
ngOnInit(): void {
  this.getTv()
}
}
