import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userpipe',
  standalone: true
})
export class UserpipePipe implements PipeTransform {

  transform(word : string): string {
    return word.charAt(0).toUpperCase()+word.slice(1).toLowerCase();
  }

}
