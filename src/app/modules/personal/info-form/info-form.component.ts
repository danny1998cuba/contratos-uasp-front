import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgModel } from '@angular/forms';
import { FormStyle } from 'src/app/data/interfaces';
import { User } from 'src/app/data/schema';

@Component({
  selector: 'app-info-form',
  templateUrl: './info-form.component.html',
  styleUrls: ['./info-form.component.css']
})
export class InfoFormComponent {

  @Input() id: string = ''
  @Input() title: string = 'Form Title'
  @Input() btn_text: string = 'Btn Text'
  @Input() styles !: FormStyle

  @Output() submitEvent = new EventEmitter();

  @Input() set user(val: User | undefined) {
    if (val)
      this._user = Object.assign({}, val)
    else
      this._user = new User()
  }

  public _user: User

  constructor() {
    this._user = new User()
  }

  isValid(params: NgModel[]) {
    return params.filter(f => f.status != 'DISABLED' ? !f.valid : false).length == 0;
  }
}
