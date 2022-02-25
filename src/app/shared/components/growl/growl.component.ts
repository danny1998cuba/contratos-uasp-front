import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { GrowlMetadata } from './growl-data.metadata';

@Component({
  selector: 'app-growl',
  templateUrl: './growl.component.html',
  styleUrls: ['./growl.component.css']
})
export class GrowlComponent implements DoCheck {
  @Input() data: GrowlMetadata = {
    msg: 'Mensaje',
    isHidden: true,
    class: 'success'
  }
  @Input() duration: number = 2000

  constructor() { }

  ngDoCheck(): void {
    if (!this.data.isHidden) {
      setTimeout(() => { this.data.isHidden = true }, this.duration)
    }
  }
}
