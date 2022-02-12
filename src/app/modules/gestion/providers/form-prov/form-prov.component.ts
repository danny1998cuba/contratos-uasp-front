import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProvider } from 'src/app/data/interfaces';

@Component({
  selector: 'app-form-prov',
  templateUrl: './form-prov.component.html',
  styleUrls: ['./form-prov.component.css']
})
export class FormProvComponent implements OnInit {

  @Input() id: string = ''
  @Input() showing: boolean = true
  @Input() title: string = 'Form Title'
  @Input() btn_text: string = 'Btn Text'

  public selected!: IProvider

  @Output() submit = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
    
  }

}
