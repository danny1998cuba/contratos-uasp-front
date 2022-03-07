import { Component, Input, OnInit } from '@angular/core';
import { Authenticated } from 'src/app/core/utils';
import { ICardData } from 'src/app/data/interfaces';

@Component({
  selector: 'app-n-card',
  templateUrl: './n-card.component.html',
  styleUrls: ['./n-card.component.css']
})
export class NCardComponent implements OnInit {

  @Input() data !: ICardData

  constructor() { }

  ngOnInit(): void {
  }

  enabled(): boolean {
    switch (this.data.enabled) {
      case 'ADMIN':
        return !Authenticated.isAdmin
        break
      case 'CONT':
        return !Authenticated.isCont
        break
      default:
        return true
    }
  }

}
