import { AfterViewInit, Component, DoCheck, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { IUser } from 'src/app/data/interfaces';

@Component({
  selector: 'app-table-users',
  templateUrl: './table-users.component.html',
  styleUrls: ['./table-users.component.css']
})
export class TableUsersComponent implements OnInit, DoCheck, AfterViewInit {

  @Input() data !: IUser[]
  @Output() changeSelected = new EventEmitter()

  dataSource !: MatTableDataSource<IUser>
  columnas = ['numero', 'username', 'fullname', 'role']
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor() { }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;    
  }
  ngDoCheck(): void {
    this.changeSelected.emit(this.selected)
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<IUser>(this.data);
  }
    
  selected !: IUser | undefined

  setSelected(row: any) {
    if(this.selected != row)
      this.selected = row;
    else 
      this.selected = undefined
  }
}
