import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: any): any {
    let currentYear = new Date().getFullYear();
    let birthYear = new Date(value).getFullYear();
    let age = currentYear - birthYear;
    return age;
  }

}
