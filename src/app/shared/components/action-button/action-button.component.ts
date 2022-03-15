import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.css']
})
export class ActionButtonComponent {

  @Input() icon !: IconDefinition
  @Input() tooltipText: string = "default"
  @Input() id: string = ""
  @Input() formSelected: boolean = false
  @Input() _disabled: boolean = false

  @Output() clicked = new EventEmitter()

  constructor() { }

}
