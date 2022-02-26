import { Component, OnInit } from '@angular/core';
import { faCalendarCheck, faCalendarTimes, faChartPie, faFile, faUser, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { CARDS_INFO } from 'src/app/data/constants';
import { ICardData, IStatCard } from 'src/app/data/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public cards: ICardData[] = CARDS_INFO
  public faArrowRight = faArrowRight

  constructor() { }

  ngOnInit(): void {
  }

  countProvs(): number { return 10; }
  countConts(): number { return 10; }
  countContsYear(): number { return 3; }
  percentAprob(): number { return 90; }
  countVenc(): number { return 1; }

  public stats: IStatCard[] = [
    {
      title: 'Cantidad de proveedores',
      value: this.countProvs() + '',
      icon: faUser
    },
    {
      title: 'Cantidad de contratos',
      value: this.countConts() + '',
      icon: faFile
    },
    {
      title: 'Contratos ' + new Date().getFullYear(),
      value: this.countContsYear() + '',
      icon: faCalendarCheck
    },
    {
      title: 'Porcentaje de aprobación',
      value: this.percentAprob() + '%',
      icon: faChartPie
    },
    {
      title: 'Contratos próximos a vencer',
      value: this.countVenc() + '',
      icon: faCalendarTimes
    },
  ]
}
