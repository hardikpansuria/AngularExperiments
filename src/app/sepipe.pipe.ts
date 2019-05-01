import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sepipe'
})
export class SepipePipe implements PipeTransform {

  transform(value: any): any {
    return value.split('').reverse().join('');
  }

}
