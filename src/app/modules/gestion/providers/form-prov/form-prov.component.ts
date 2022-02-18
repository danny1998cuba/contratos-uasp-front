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
  public roles: Rol[] = []

  @Output() submitEvent = new EventEmitter();

  constructor(
    private userService: UserService
  ) {
    this._provider = new Provider()

    this.userService.getRoles().subscribe(
      r => {
        if (!r.error) {
          this.roles = r.data;
          console.log(r.status)
        } else {
          console.log(r.msg + '\nStatus: ' + r.status);
        }
      }
    )
  }

  isValid(params: NgModel[]) {
    return params.filter(f => !f.valid).length == 0;
  }
}
