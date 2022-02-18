import { Pipe, PipeTransform } from '@angular/core';
import { User } from 'src/app/data/schema';

@Pipe({
  name: 'fullName'
})
export class FullNamePipe implements PipeTransform {

  transform(user: User): string {
    return user.nombre + ' ' + user.apellidoP + ' ' + user.apellidoM;
  }

}
