import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Contrato } from 'src/app/data/schema';

@Component({
  selector: 'app-table-cont',
  templateUrl: './table-cont.component.html',
  styleUrls: ['./table-cont.component.css']
})
export class TableContComponent implements OnInit {

  @Input() data !: Contrato[]
  @Output() changeSelected = new EventEmitter()

  dataSource !: MatTableDataSource<Contrato>
  columnas = ['idx', 'prov', 'fecha_em', 'fecha_ven', 'numero']

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor() { }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  ngDoCheck(): void {
    this.changeSelected.emit(this.selected)
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Contrato>(this.data)
    console.log(this.dataSource)
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.selected = undefined
  }

  selected !: Contrato | undefined

  setSelected(row: any) {
    if (this.selected != row)
      this.selected = row;
    else
      this.selected = undefined
  }
}
