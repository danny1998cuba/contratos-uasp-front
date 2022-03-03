import { Pipe, PipeTransform } from '@angular/core';
import { Contrato } from 'src/app/data/schema';

@Pipe({
  name: 'contract'
})
export class ContractPipe implements PipeTransform {

  transform(cont: Contrato): string {
    return cont.idProveedor ? (cont.numero ? cont.numero : 'N/N') + ' - ' + cont.idProveedor.nombre : 'No existe';
  }

}
