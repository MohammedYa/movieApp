import { Component, OnInit } from '@angular/core';
import { GetMovieService } from '../get-movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit{
  media_tybe:string=''
  movieId:Number=0
  itemDetails: any = {}
  imgBaseUrl:string = ''
  biography:string=''
  constructor(private GetMovieService:GetMovieService,private _ActivatedRoute:ActivatedRoute){
    this.media_tybe=_ActivatedRoute.snapshot.params['media_tybe']
    this.movieId=_ActivatedRoute.snapshot.params['id']   
    this.imgBaseUrl=GetMovieService.imgBaseUrl
    this.getDetails()
  } 

  getDetails(){

    this.GetMovieService.getMovieDetails(this.media_tybe,this.movieId).subscribe(
      (res)=>{
        this.itemDetails=res
        this.biography= this.itemDetails.biography
       
        
      }
    )
  }
  ngOnInit(): void {
    
  }
}
