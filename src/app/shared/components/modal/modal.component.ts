import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @Input() type:string = "None";
  @Input() name:string = "None"

  constructor() { }

  ngOnInit(): void {
  }

  closeModal() {
    var modal = document.querySelector('.modal');
    modal?.classList.remove('active')
  }

}
