import { Component, OnInit } from '@angular/core';
import { IProvider } from 'src/app/data/interfaces';

@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.css']
})
export class ProvidersComponent implements OnInit {

  public data : IProvider[] = PROVS
  
  constructor() { }
  
  ngOnInit(): void {
  }

  selected !: IProvider | undefined
  getSelected(val : IProvider) {
    this.selected = val;
  }
  
}

const PROVS : IProvider[] = [
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