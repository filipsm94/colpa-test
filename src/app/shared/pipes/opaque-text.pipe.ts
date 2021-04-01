import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'opaqueText'})
export class OpaqueTextPipe implements PipeTransform {
  transform(value: string): string {
      const visibleText = value.substring(value.length-5)
      const repeatText = '*'.repeat(2);
    return `${repeatText}${visibleText}`;
  }
}