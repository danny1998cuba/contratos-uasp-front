import { Component, OnInit } from '@angular/core';
import { IContract } from 'src/app/data/interfaces';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-list-cont',
  templateUrl: './list-cont.component.html',
  styleUrls: ['./list-cont.component.css']
})
export class ListContComponent implements OnInit {

  public data : IContract[] = CONTS

  faDown = faDownload

  constructor() { }

  ngOnInit(): void {
  }

  selected !: IContract | undefined
  getSelected(val : IContract) {
    this.selected = val;
  }

}

const CONTS : IContract[] = [
  {
    "id": 3,
    "id_provider": 2,
    "id_dictamen": 0,
    "numero": undefined,
    "duracion": undefined,
    "fecha_firma": undefined,
    "fecha_venc": undefined,
    "observ": undefined
  },
  {
    "id": 1,
    "id_provider": 3,
    "id_dictamen": undefined,
    "numero": undefined,
    "duracion": undefined,
    "fecha_firma": undefined,
    "fecha_venc": undefined,
    "observ": undefined
  },
  {
    "id": 2,
    "id_provider": 1,
    "id_dictamen": 2,
    "numero": "2022/01",
    "duracion": 10,
    "fecha_firma": new Date("12-01-2022"),
    "fecha_venc": new Date("12-11-2022"),
    "observ": "Contrato para la compra de producciones textiles: ropa, cortinas, sabanas..."
  }
]