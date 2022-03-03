import { DatePipe, getLocaleId } from '@angular/common';
import { Component, DoCheck, LOCALE_ID, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { faDownload, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { IContractFilters } from 'src/app/data/interfaces';
import { Contrato, Provider } from 'src/app/data/schema';
import { ContractService, ProviderService } from 'src/app/data/services/api';
import { ExportService } from 'src/app/shared/services';
import { FilterFormComponent } from './filter-form/filter-form.component';
import { InfoModalComponent } from './info-modal/info-modal.component';

@Component({
  selector: 'app-info-conts',
  templateUrl: './info-conts.component.html',
  styleUrls: ['./info-conts.component.css']
})
export class InfoContsComponent implements OnInit, DoCheck {

  public data: Contrato[] = []; //Listado de contratos
  public providers: Provider[] = []
  public filtersDetails = ''

  public style = {  //estilo para el form-container (height ajustable)
    height: '0px'
  }
  isLoading = true  //loader
  faDown = faDownload; faInfo = faInfoCircle

  // Elementos del DOM
  @ViewChild('filterForm') form1 !: FilterFormComponent;
  @ViewChild('modal') modal !: InfoModalComponent;

  constructor(
    private contractService: ContractService,
    private provsService: ProviderService,
    private exportService: ExportService,
    private router: Router
  ) {
    this.loadProvs()
  }

  ngOnInit(): void {
    setTimeout(() => {
      if (this.form1) {
        this.resizeFormContainer()
      }
      this.isLoading = false
    }, 1000);
  }

  // Seleccion del proveedor activo
  selected !: Contrato | undefined
  getSelected(val: Contrato) {
    this.selected = val
  }

  ngDoCheck(): void {
    if (this.form1) {
      this.resizeFormContainer()
    }
  }

  resizeFormContainer() {
    var form = document.querySelector('.form-container form.showing');
    if (form) {
      this.style.height = form.scrollHeight + 'px';
    }
  }

  loadProvs() {
    this.provsService.getAllProviders().subscribe(
      r => {
        if (!r.error) {
          this.providers = r.data;
        } else {
          this.router.navigateByUrl('/home');
        }
      }
    )
  }

  submited(filters: IContractFilters) {
    this.isLoading = true
    this.contractService.getContratosFiltered(filters).subscribe(
      r => {
        if (!r.error) {
          this.data = r.data;
          this.processFilters(filters)
          this.isLoading = false;
        } else {
          this.router.navigateByUrl('/home');
        }
      }
    )
  }

  processFilters(filters: IContractFilters) {
    this.filtersDetails = ''

    if (filters && JSON.stringify(filters) != '{}') {
      let addedSome = false
      if (filters.provId != undefined) {
        if (addedSome) {
          this.filtersDetails += ' | '
        } else {
          addedSome = true
        }
        let p = this.providers.filter(p => p.id == filters.provId)[0]
        this.filtersDetails += 'Proveedor: ' + p.nombre
      }
      if (filters.dict != undefined) {
        if (addedSome) {
          this.filtersDetails += ' | '
        } else {
          addedSome = true
        }

        this.filtersDetails += 'Dictaminado: ' + (filters.dict ? "Sí" : "No")
      }
      if (filters.aprob != undefined) {
        if (addedSome) {
          this.filtersDetails += ' | '
        } else {
          addedSome = true
        }

        this.filtersDetails += 'Aprobado: ' + (filters.aprob ? "Sí" : "No")
      }
      if (filters.vig != undefined) {
        if (addedSome) {
          this.filtersDetails += ' | '
        } else {
          addedSome = true
        }

        this.filtersDetails += 'Vigente: ' + (filters.vig ? "Sí" : "No")
      }
      if (filters.x_venc != undefined) {
        if (addedSome) {
          this.filtersDetails += ' | '
        } else {
          addedSome = true
        }

        this.filtersDetails += 'Por vencer'
      }
      if (filters.year != undefined) {
        if (addedSome) {
          this.filtersDetails += ' | '
        } else {
          addedSome = true
        }
        this.filtersDetails += 'Año: ' + filters.year
      }
    } else {
      this.filtersDetails = 'Sin filtros activos'
    }
  }

  infoSelected() {
    if (this.selected)
      this.modal.contract = this.selected
    this.modal.openModal()
  }

  download() {
    this.exportService.downloadPdf(
      this.prepareList(),
      [
        "Listado de contratos",
        this.filtersDetails == 'Sin filtros activos' ?
          'Todos los contratos' :
          ('Filtros aplicados: ' + this.filtersDetails)
      ],
      ('Contratos_' + new Date().toISOString() + '.pdf')
    )
  }

  prepareList() {
    let listExport: {
      id: number,
      prov: string,
      fechaFirma: string | null,
      fechaVenc: string | null,
      number: string
    }[] = []

    for (let index = 0; index < this.data.length; index++) {
      const cont = this.data[index];

      let datePipe = new DatePipe("es-ES")

      listExport.push({
        id: index + 1,
        prov: cont.idProveedor.nombre,
        fechaFirma: cont.fechaFirma ? (datePipe.transform(cont.fechaFirma, 'dd / MMM / yyyy')) : 'No asignado',
        fechaVenc: cont.fechaVenc ? (datePipe.transform(cont.fechaVenc, 'dd / MMM / yyyy')) : 'No asignado',
        number: cont.numero ? cont.numero : 'No asignado'
      })
    }

    return listExport
  }
}
