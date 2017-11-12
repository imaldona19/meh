import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'xo'
})
export class XoPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value === 1){
      return 'x';
    }

    if (value === 2){
      return 'o';
    }

    return ' ';
  }

}
