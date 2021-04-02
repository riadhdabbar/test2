import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchTerm: any): any {

    if(value.lenght ===0) {
      return value
                   }
    return value.filter(function(search){
     return search.productName.toLowerCase().indexOf(searchTerm) > -1

    })
  }

}
