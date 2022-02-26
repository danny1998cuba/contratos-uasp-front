import { Component, OnInit } from '@angular/core';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Rol, User } from 'src/app/data/schema';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {

  public user: User = {
    id: 0,
    username: 'danny98cuba',
    nombre: 'Daniel',
    apellidoP: 'Gonzalez',
    apellidoM: 'Cuetara',
    enabled: true,
    password: '123',
    rolesList: [
      {
        name: 'Administrador'
      },
      {
        name:'Ususario estandar'
      }
    ]
    // photo: 'assets/images/user-picture-default.png',
    // role: 'Administrador'
  }

  angle = faAngleRight

  constructor() { }

  ngOnInit(): void {
  }

}
