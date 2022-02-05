import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/data/interfaces';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {

  public user: IUser = {
    username: 'danny98cuba',
    nombre: 'Daniel',
    apellidoP: 'Gonzalez',
    apellidoM: 'Cuetara',
    enabled: true,
    password: '123',
    photo: 'assets/images/user-picture-default.png',
    role: 'Administrador'
  }

  angle = faAngleRight

  constructor() { }

  ngOnInit(): void {
  }

}
