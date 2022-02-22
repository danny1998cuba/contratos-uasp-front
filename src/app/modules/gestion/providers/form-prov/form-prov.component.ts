import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgModel } from '@angular/forms';
import { FormStyle } from 'src/app/data/interfaces';
import { Provider, Rol } from 'src/app/data/schema';
import { UserService } from 'src/app/data/services/api';

@Component({
  selector: 'app-form-prov',
  templateUrl: './form-prov.component.html',
  styleUrls: ['./form-prov.component.css']
})
export class FormProvComponent {

  @Input() id: string = ''
  @Input() title: string = 'Form Title'
  @Input() btn_text: string = 'Btn Text'
  @Input() styles !: FormStyle

  @Input() set provider(val: Provider | undefined) {
    if (val)
      this._provider = Object.assign({}, val)
    else
      this._provider = new Provider()
  }

  public _provider: Provider

  @Output() submitEvent = new EventEmitter();

  constructor() {
    this._provider = new Provider()
  }

  isValid(params: NgModel[]) {
    return params.filter(f => !f.valid).length == 0;
  }
}
