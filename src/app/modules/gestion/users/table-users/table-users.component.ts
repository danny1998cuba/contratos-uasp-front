import { Component, Input, OnInit } from '@angular/core';
import { IUser } from 'src/app/data/interfaces';

@Component({
  selector: 'app-table-users',
  templateUrl: './table-users.component.html',
  styleUrls: ['./table-users.component.css']
})
export class TableUsersComponent implements OnInit {

  @Input() data !: IUser[]

  columnas = ['numero', 'username', 'fullname', 'role']

  constructor() { }

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
