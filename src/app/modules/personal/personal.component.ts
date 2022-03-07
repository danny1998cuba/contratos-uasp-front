import { Component, OnInit } from '@angular/core';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Authenticated } from 'src/app/core/utils';
import { Rol, User } from 'src/app/data/schema';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent {

  public user: User

  angle = faAngleRight

  constructor() {
    let u = Authenticated.getUserFromLS
    if (u) {
      this.user = u
    } else {
      this.user = new User()
    }
  }

  isAdmin():boolean {
    return Authenticated.isAdmin
  }
  isCont():boolean {
    return Authenticated.isCont
  }

}
