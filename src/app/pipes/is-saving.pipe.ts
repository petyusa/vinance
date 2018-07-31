import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isSaving'
})
export class IsSavingPipe implements PipeTransform {
  transform(value: boolean, args?: any): string {
    return value ? 'lock' : '';
  }
}
