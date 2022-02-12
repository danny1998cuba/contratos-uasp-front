import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { IProvider } from 'src/app/data/interfaces';
import { FormProvComponent } from './form-prov/form-prov.component';

@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.css']
})
export class ProvidersComponent implements AfterViewInit {

  public data: IProvider[] = PROVS
  public style = {
    height: '0px'
  }

  @ViewChild('addForm') form1 !: FormProvComponent;

  constructor() { }

  ngAfterViewInit(): void {
    this.resizeFormContainer()
  }

  selected !: IProvider | undefined
  getSelected(val: IProvider) {
    this.selected = val;
    if(this.form1)
      this.form1.selected = val;
  }

  resizeFormContainer() {
    var form = document.querySelector('.form-container form.showing');
    if (form) {
      this.style.height = form.scrollHeight + 'px';
    }
  }

  submited() {

  }

}

const PROVS: IProvider[] = [
  {
    numero: 1,
    nombre: "Salud Publica"
  },
  {
    numero: 2,
    nombre: "Empresa Porcino"
  },
  {
    numero: 3,
    nombre: "Producciones Textiles"
  },
  {
    numero: 4,
    nombre: "Almacenes Universales"
  },
];