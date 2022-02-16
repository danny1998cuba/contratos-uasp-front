import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Provider } from 'src/app/data/schema';

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

  public selected!: Provider

  @Output() submit = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
    
  }

}
