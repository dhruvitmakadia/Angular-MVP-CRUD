import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emoji'
})
export class EmojiPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (value === 'happy') {
      return '🤠';
    } else if (value === 'sad') {
      return '🤕';
    } else if (value === 'angry') {
      return '🤬';
    }
  }
}
