import { Component, OnInit } from '@angular/core';
import { CARDS_INFO } from 'src/app/data/constants';
import { ICardData } from 'src/app/data/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public cards: ICardData[] = CARDS_INFO

  constructor() { }

  ngOnInit(): void {
  }

}
