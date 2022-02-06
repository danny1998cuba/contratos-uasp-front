import { AfterViewInit, Component, DoCheck, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { IContract } from 'src/app/data/interfaces';

@Component({
  selector: 'app-table-cont',
  templateUrl: './table-cont.component.html',
  styleUrls: ['./table-cont.component.css']
})
export class TableContComponent implements OnInit, DoCheck, AfterViewInit {

  @Input() data !: IContract[]
  @Output() changeSelected = new EventEmitter()

  dataSource !: MatTableDataSource<IContract>
  columnas = ['idx', 'prov', 'fecha_em', 'fecha_ven', 'numero']

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  selected !: IContract | undefined

  constructor() { }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
  
  ngDoCheck(): void {
    this.changeSelected.emit(this.selected)
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<IContract>(this.data)
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.selected = undefined
  }

  setSelected(row: any) {
    if (this.selected != row)
      this.selected = row;
    else
      this.selected = undefined
  }
}
