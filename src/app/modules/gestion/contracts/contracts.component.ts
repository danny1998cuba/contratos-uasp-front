import { HttpStatusCode } from '@angular/common/http';
import { Component, DoCheck, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { faEdit, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Contrato, Provider } from 'src/app/data/schema';
import { ContractService, ProviderService } from 'src/app/data/services/api';
import { GrowlComponent } from 'src/app/shared/components';
import { FormContComponent } from './form-cont/form-cont.component';

declare var resizeFormContainer: any;
declare var common: {
  add: () => void,
  mod: () => void
};

@Component({
  selector: 'app-contracts',
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.css']
})
export class ContractsComponent implements DoCheck {

  // Dafinicion de variables
  public data: Contrato[] = []; //Listado de contratos
  public providers: Provider[] = []

  isLoading = true  //loader
  faPlus = faPlus; faEdit = faEdit; faTrash = faTrash //icons

  // Elementos del DOM
  @ViewChild('addForm') form1 !: FormContComponent;
  @ViewChild('modForm') form2 !: FormContComponent;
  @ViewChild('growl') growl !: GrowlComponent;

  constructor(
    private contractService: ContractService,
    private provsService: ProviderService,
    private router: Router
  ) {
    this.refreshData()
  }

  // Ajustar el form-container cada vez que se produzca un cambio
  ngDoCheck(): void {
    if (this.form1 || this.form2) {
      resizeFormContainer()
    }
  }

  // Seleccion del proveedor activo
  selected !: Contrato | undefined
  getSelected(val: Contrato) {
    this.selected = val
    if (!this.selected && this.form2 && this.form2.styles.showing) {
      this.addBtn()
    }
  }

  // Operaciones de CRUD llamadas desde el servicio
  addProvider(cont: Contrato) {
    this.contractService.createContrato(cont).subscribe(
      r => {
        if (r.status == HttpStatusCode.Created) {
          this.isLoading = true;
          this.refreshData()
        } else {
          this.growl.data = {
            msg: r.msg,
            class: 'error',
            isHidden: false
          }
        }
      }
    )
  }

  modProvider(cont: Contrato) {
    this.contractService.updateContrato(cont.id, cont).subscribe(
      r => {
        if (r.status == HttpStatusCode.Ok) {
          this.isLoading = true;
          this.refreshData()
        } else {
          this.growl.data = {
            msg: r.msg,
            class: 'error',
            isHidden: false
          }
        }
      }
    )
  }

  delProvider() {
    if (this.selected)
      this.contractService.deleteContrato(this.selected.id).subscribe(
        r => {
          if (r.status == HttpStatusCode.Ok) {
            this.isLoading = true;
            this.refreshData()
          } else {
            this.growl.data = {
              msg: r.msg,
              class: 'error',
              isHidden: false
            }
          }
        }
      )
  }

  refreshData() {
    this.contractService.getContratos().subscribe(
      r => {
        if (!r.error) {
          this.data = r.data;
          console.log(r.status)
          this.loadProvs()
          setTimeout(() => this.isLoading = false, 1000)
        } else {
          this.router.navigateByUrl('/home');
        }
      }
    )
  }

  loadProvs() {
    this.provsService.getProviders().subscribe(
      r => {
        if (!r.error) {
          this.providers = r.data;
        } else {
          this.router.navigateByUrl('/home');
        }
      }
    )
  }

  // Funciones de los botones
  addBtn() {
    common.add()
    this.form1.styles.showing = true
    this.form2.styles.showing = false
  }

  modBtn() {
    common.mod()
    this.form1.styles.showing = false
    this.form2.styles.showing = true
  }

}
