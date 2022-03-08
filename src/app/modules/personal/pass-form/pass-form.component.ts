import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgModel } from '@angular/forms';
import { FormStyle } from 'src/app/data/interfaces'

@Component({
  selector: 'app-pass-form',
  templateUrl: './pass-form.component.html',
  styleUrls: ['./pass-form.component.css']
})
export class PassFormComponent {

  @Input() id: string = ''
  @Input() title: string = 'Form Title'
  @Input() btn_text: string = 'Btn Text'
  @Input() styles !: FormStyle

  @Output() submitEvent = new EventEmitter();

  public oldPass = ''; newPass = ''; newPass2 = ''

  constructor() { }

  isValid(params: NgModel[]) {
    return params.filter(f => f.status != 'DISABLED' ? !f.valid : false).length == 0 && this.newPass === this.newPass2;
  }

}
