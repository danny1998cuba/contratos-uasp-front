import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgModel } from '@angular/forms';
import { FormStyle } from 'src/app/data/interfaces';
import { Rol, User } from 'src/app/data/schema';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css']
})
export class FormUserComponent {

  @Input() id: string = ''
  @Input() title: string = 'Form Title'
  @Input() btn_text: string = 'Btn Text'
  @Input() styles !: FormStyle
  @Input() roles: Rol[] = []

  @Input() set user(val: User | undefined) {
    if (val)
      this._user = Object.assign({}, val)
    else
      this._user = new User()
  }

  public _user: User

  @Output() submitEvent = new EventEmitter();

  constructor() {
    this._user = new User()
  }

  isValid(params: NgModel[]) {
    return params.filter(f => !f.valid).length == 0;
  }

  compareObjects(ob1: any, ob2: any) { return ob1.id === ob2.id }

}
