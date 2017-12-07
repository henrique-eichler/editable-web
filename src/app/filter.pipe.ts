import {Pipe, PipeTransform} from '@angular/core';
import {City} from './profile';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(cities: City[], text: string): any {
    return cities.filter(city => city.city.indexOf(text) === 0);
  }

}
