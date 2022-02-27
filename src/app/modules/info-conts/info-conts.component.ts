import { JsonPipe } from '@angular/common';
import { Component, DoCheck, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ContractFilters } from 'src/app/data/interfaces';
import { Contrato, Provider } from 'src/app/data/schema';
import { ContractService, ProviderService } from 'src/app/data/services/api';
import { FilterFormComponent } from './filter-form/filter-form.component';

@Component({
  selector: 'app-info-conts',
  templateUrl: './info-conts.component.html',
  styleUrls: ['./info-conts.component.css']
})
export class InfoContsComponent implements OnInit, DoCheck {

  public data: Contrato[] = []; //Listado de contratos
  public providers: Provider[] = []

  public style = {  //estilo para el form-container (height ajustable)
    height: '0px'
  }
  isLoading = true  //loader

  // Elementos del DOM
  @ViewChild('filterForm') form1 !: FilterFormComponent;

  constructor(
    private contractService: ContractService,
    private provsService : ProviderService,
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

  submited(filters:ContractFilters) {
    alert(new JsonPipe().transform(filters))
  }
}
