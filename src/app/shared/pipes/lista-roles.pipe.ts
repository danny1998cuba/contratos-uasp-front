import { Pipe, PipeTransform } from '@angular/core';
import { Rol } from 'src/app/data/schema';

@Pipe({
  name: 'listaRoles'
})
export class ListaRolesPipe implements PipeTransform {

  transform(roles: Rol[]): unknown {
    let retorno = ''
    roles.forEach((r, i) => {
      retorno += r.name;
      if (i < roles.length - 1) {
        retorno += ', '
      }
    })
    return retorno;
  }

}
