import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterprice'
})
export class FilterpricePipe implements PipeTransform {

  transform(value: any, searchTerm: any): any {

    if(value.lenght ===0) {
      return value
                   }
    return value.filter(function(searchByPrice){
     return searchByPrice.price >= (searchTerm) 

    })
  }

}
