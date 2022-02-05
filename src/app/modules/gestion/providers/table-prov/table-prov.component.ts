import { Component, DoCheck, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProvider } from 'src/app/data/interfaces';

@Component({
  selector: 'app-table-prov',
  templateUrl: './table-prov.component.html',
  styleUrls: ['./table-prov.component.css']
})
export class TableProvComponent implements OnInit, DoCheck {

  @Input() data !: IProvider[]
  @Output() changeSelected = new EventEmitter()

  columnas = ['numero', 'nombre']

  constructor() { }
  
  ngDoCheck(): void {
    this.changeSelected.emit(this.selected)  
  }

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
