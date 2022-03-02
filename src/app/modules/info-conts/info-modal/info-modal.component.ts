import { Component, Input, OnInit } from '@angular/core';
import { Contrato } from 'src/app/data/schema';

@Component({
  selector: 'app-info-modal',
  templateUrl: './info-modal.component.html',
  styleUrls: ['./info-modal.component.css']
})
export class InfoModalComponent {

  @Input() contract: Contrato = new Contrato()

  constructor() { }

  public openModal() {
    var modal = document.querySelector('.modal');
    modal?.classList.add('active')
  }

  closeModal() {
    var modal = document.querySelector('.modal');
    modal?.classList.remove('active')
  }
}
