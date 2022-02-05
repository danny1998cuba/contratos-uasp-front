import { Component, Input, OnInit } from '@angular/core';
import { IProvider } from 'src/app/data/interfaces';

@Component({
  selector: 'app-table-prov',
  templateUrl: './table-prov.component.html',
  styleUrls: ['./table-prov.component.css']
})
export class TableProvComponent implements OnInit {

  @Input() data !: IProvider[]

  columnas = ['numero', 'nombre']

  constructor() { }

  ngOnInit(): void {
  }
    
  selected !: IProvider | undefined

  setSelected(row: any) {
    if(this.selected != row)
      this.selected = row;
    else 
      this.selected = undefined
  }
}
