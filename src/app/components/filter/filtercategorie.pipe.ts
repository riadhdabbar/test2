import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtercategorie'
})
export class FiltercategoriePipe implements PipeTransform {



  transform(value: any, searchTerm: any): any {

    if(value.lenght ===1) {
      return value
                   }
    return value.filter(function(searchByCategories){
     return searchByCategories.category.toLowerCase().indexOf(searchTerm) > -1

    })
  }

  

}
