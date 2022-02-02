import { Component, Input, OnInit } from '@angular/core';
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

}
