import { HttpStatusCode } from '@angular/common/http';
import { Component, DoCheck, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Provider } from 'src/app/data/schema';
import { ProviderService } from 'src/app/data/services/api';
import { FormProvComponent } from './form-prov/form-prov.component';
import { faPlus, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import { ActionButtonComponent, GrowlComponent, ModalComponent } from 'src/app/shared/components';

@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.css']
})
export class ProvidersComponent implements DoCheck {

  // Dafinicion de variables
  public data: Provider[] = []; //Listado de proveedores
  public style = {  //estilo para el form-container (height ajustable)
    height: '0px'
  }
  isLoading = true  //loader
  faPlus = faPlus; faEdit = faEdit; faTrash = faTrash //icons

  // Elementos del DOM
  @ViewChild('addForm') form1 !: FormProvComponent;
  @ViewChild('modForm') form2 !: FormProvComponent;
  @ViewChild('_addBtn') _addBtn !: ActionButtonComponent;
  @ViewChild('_modBtn') _modBtn !: ActionButtonComponent;
  @ViewChild('modal') modal !: ModalComponent;
  @ViewChild('growl') growl !: GrowlComponent;

  constructor(
    private providerService: ProviderService,
    private router: Router
  ) {
    this.refreshData()
  }

  // Ajustar el form-container cada vez que se produzca un cambio
  ngDoCheck(): void {
    if (this.form1 || this.form2) {
      this.resizeFormContainer()
    }
  }

  resizeFormContainer() {
    var form = document.querySelector('.form-container form.showing');
    if (form) {
      this.style.height = form.scrollHeight + 'px';
    }
  }

  // Seleccion del proveedor activo
  selected !: Provider | undefined
  getSelected(val: Provider) {
    this.selected = val
    if (!this.selected && this.form2 && this.form2.styles.showing) {
      this.addBtn()
    }
  }

  // Operaciones de CRUD llamadas desde el servicio
  addProvider(prov: Provider) {
    this.providerService.createProvider(prov).subscribe(
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

  modProvider(prov: Provider) {
    this.providerService.updateProvider(prov.id, prov).subscribe(
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
      this.providerService.deleteProvider(this.selected.id).subscribe(
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
    this.providerService.getProviders().subscribe(
      r => {
        if (!r.error) {
          this.data = r.data;
          console.log(r.status)
          setTimeout(() => this.isLoading = false, 1000)
        } else {
          this.router.navigateByUrl('/home');
        }
      }
    )
  }

  // Funciones de los botones
  addBtn() {
    this.form1.styles.style = {
      transform: 'translateX(0px)'
    }
    this.form2.styles.style = {
      transform: 'translateX(0px)'
    }

    this.form1.styles.showing = true
    this.form2.styles.showing = false

    this._addBtn.formSelected = true
    this._modBtn.formSelected = false

    this.resizeFormContainer()
  }

  modBtn() {
    this.form1.styles.style = {
      transform: 'translateX(-110%)'
    }
    this.form2.styles.style = {
      transform: 'translateX(-110%)'
    }

    this.form1.styles.showing = false
    this.form2.styles.showing = true

    this._addBtn.formSelected = false
    this._modBtn.formSelected = true

    this.resizeFormContainer()
  }

  delBtn() {
    this.modal.openModal()
  }
}
