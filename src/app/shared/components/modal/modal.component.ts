import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() type:string = "None";
  @Input() name:string = "None"

  @Output() delete = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  public openModal() {
    var modal = document.querySelector('.modal');
    modal?.classList.add('active')
  }

  closeModal() {
    var modal = document.querySelector('.modal');
    modal?.classList.remove('active')
  }

}
