import { Pipe, PipeTransform } from '@angular/core';
import { IUser } from 'src/app/data/interfaces';

@Pipe({
  name: 'fullName'
})
export class FullNamePipe implements PipeTransform {

  transform(user: IUser): string {
    return user.nombre + ' ' + user.apellidoP + ' ' + user.apellidoM;
  }

}
