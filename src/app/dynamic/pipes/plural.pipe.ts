import { Pipe, PipeTransform } from '@angular/core';
import { Plural } from '../plural.enum';

@Pipe({
  name: 'plural'
})
export class PluralPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (value >= '10') {
      return 'Many';
    } else if (value >= '6') {
      return 'Several ';
    } else if (value >= '3') {
      return 'Few ';
    } else if (value === '2') {
      return 'Couple  ';
    } else if (value === '1') {
      return 'Single  ';
    } else if (value === '0') {
      return 'None  ';
    } else {
      return Plural[value];
    }
  }

}
