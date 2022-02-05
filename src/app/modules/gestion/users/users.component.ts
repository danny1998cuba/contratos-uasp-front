import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/data/interfaces';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public data : IUser[] = USERS

  constructor() { }

  ngOnInit(): void {
  }

  selected !: IUser | undefined
  getSelected(val : IUser) {
    this.selected = val;
  }
}

const USERS : IUser[] = [
  {
    username:'danny98cuba',
    nombre:'Daniel',
    apellidoP:'Gonzalez',
    apellidoM:'Cuetara',
    enabled:true,
    password:'123',
    photo:'',
    role:'Administrador'
  },
  {
    username:'eperez',
    nombre:'Ernesto',
    apellidoP:'Perez',
    apellidoM:'',
    enabled:true,
    password:'123',
    photo:'',
    role:'Usuario'
  },
  {
    username:'mjimenez',
    nombre:'Maria',
    apellidoP:'Jimenez',
    apellidoM:'',
    enabled:true,
    password:'123',
    photo:'',
    role:'Usuario'
  }  
];
