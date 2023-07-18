import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'seach'
})
export class SeachPipe implements PipeTransform {

  transform(trendingList:any[], term:string): any[] {
    return trendingList.filter((item)=> item.title.toLowerCase().includes(term.toLowerCase()));
  }

}
