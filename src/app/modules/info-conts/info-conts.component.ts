import { Component, DoCheck, OnInit, ViewChild } from '@angular/core';
import { Contrato } from 'src/app/data/schema';
import { FilterFormComponent } from './filter-form/filter-form.component';

@Component({
  selector: 'app-info-conts',
  templateUrl: './info-conts.component.html',
  styleUrls: ['./info-conts.component.css']
})
export class InfoContsComponent implements OnInit, DoCheck {

  public data: Contrato[] = []; //Listado de contratos
  public style = {  //estilo para el form-container (height ajustable)
    height: '0px'
  }
  isLoading = true  //loader

  // Elementos del DOM
  @ViewChild('filterForm') form1 !: FilterFormComponent;

  constructor() { }

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

}
