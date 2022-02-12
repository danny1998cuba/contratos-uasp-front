import { AfterViewInit, Component, DoCheck, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { IProvider } from 'src/app/data/interfaces';
import { faList } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-table-prov',
  templateUrl: './table-prov.component.html',
  styleUrls: ['./table-prov.component.css']
})
export class TableProvComponent implements OnInit, DoCheck, AfterViewInit {

  @Input() data !: IProvider[]
  @Output() changeSelected = new EventEmitter()

  dataSource !: MatTableDataSource<IProvider>
  columnas = ['numero', 'nombre', 'redirect']
  faIcon = faList;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor() { }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  ngDoCheck(): void {
    this.changeSelected.emit(this.selected)
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<IProvider>(this.data)
  }

  selected !: IProvider | undefined

  setSelected(row: any) {
    if (this.selected != row)
      this.selected = row;
    else
      this.selected = undefined
  }
}
