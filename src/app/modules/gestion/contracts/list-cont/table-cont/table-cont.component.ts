import { NONE_TYPE } from '@angular/compiler';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { IContract } from 'src/app/data/interfaces';

@Component({
  selector: 'app-table-cont',
  templateUrl: './table-cont.component.html',
  styleUrls: ['./table-cont.component.css']
})
export class TableContComponent implements OnInit {

  @Input() data !: IContract[]
  dataSource !: MatTableDataSource<IContract>
  columnas = ['idx', 'prov', 'fecha_em', 'fecha_ven', 'numero']

  selected !: IContract | undefined

  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<IContract>(this.data)
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  setSelected(row: any) {
    if(this.selected != row)
      this.selected = row;
    else 
      this.selected = undefined
  }
}
