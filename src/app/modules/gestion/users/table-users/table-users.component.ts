import { Component, DoCheck, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IUser } from 'src/app/data/interfaces';

@Component({
  selector: 'app-table-users',
  templateUrl: './table-users.component.html',
  styleUrls: ['./table-users.component.css']
})
export class TableUsersComponent implements OnInit, DoCheck {

  @Input() data !: IUser[]
  @Output() changeSelected = new EventEmitter()

  columnas = ['numero', 'username', 'fullname', 'role']

  constructor() { }
  ngDoCheck(): void {
    this.changeSelected.emit(this.selected)
  }

  ngOnInit(): void {
  }
    
  selected !: IUser | undefined

  setSelected(row: any) {
    if(this.selected != row)
      this.selected = row;
    else 
      this.selected = undefined
  }
}
