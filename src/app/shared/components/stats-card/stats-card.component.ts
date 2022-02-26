import { Component, Input, OnInit } from '@angular/core';
import { IStatCard } from 'src/app/data/interfaces';

@Component({
  selector: 'app-stats-card',
  templateUrl: './stats-card.component.html',
  styleUrls: ['./stats-card.component.css']
})
export class StatsCardComponent implements OnInit {

  @Input() data !: IStatCard

  constructor() { }

  ngOnInit(): void {
  }

}
