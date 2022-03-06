import { Component, OnInit } from '@angular/core';
import { faCalendarCheck, faCalendarTimes, faChartPie, faFile, faUser, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { CARDS_INFO } from 'src/app/data/constants';
import { ICardData, IStatCard } from 'src/app/data/interfaces';
import { User } from 'src/app/data/schema';
import { AuthService, ContractService, ProviderService } from 'src/app/data/services/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public cards: ICardData[] = CARDS_INFO
  public faArrowRight = faArrowRight
  public stats: IStatCard[] = []
  isLoading = true  //loader

  currentUser!:User

  provs = 0; conts = 0; contY = 0; aprobs = 0; venc = 0

  constructor(
    private providersService: ProviderService,
    private contractService: ContractService,
    private authService: AuthService
  ) {
    this.countProvs()
    this.countConts()
    this.countContsYear()
    this.percentAprob()
    this.countVenc()
    this.loadUser()

    setTimeout(() => {
      this.stats = [
        {
          title: 'Cantidad de proveedores',
          value: this.provs + '',
          icon: faUser
        },
        {
          title: 'Cantidad de contratos',
          value: this.conts + '',
          icon: faFile
        },
        {
          title: 'Contratos ' + new Date().getFullYear(),
          value: this.contY + '',
          icon: faCalendarCheck
        },
        {
          title: 'Porcentaje de aprobación',
          value: (isNaN(this.aprobs) ? this.aprobs : this.aprobs.toFixed(2)) + '%',
          icon: faChartPie
        },
        {
          title: 'Contratos próximos a vencer',
          value: this.venc + '',
          icon: faCalendarTimes
        },
      ]
      this.isLoading = false
    }, 2000);
  }

  ngOnInit(): void {

  }

  countProvs() {
    this.providersService.getProviders().subscribe(
      r => {
        if (!r.error) {
          this.provs = r.data.length
        }
      }
    )
  }

  loadUser() {
    this.authService.getUser.subscribe(
      r => {
        if (!r.error) {
          this.currentUser = r.data
        }
      }
    )
  }

  countConts() {
    this.contractService.getContratos().subscribe(
      r => {
        if (!r.error) {
          this.conts = r.data.length
        }
      }
    )
  }
  countContsYear() {
    this.contractService.getContratosFiltered({ year: new Date().getFullYear() }).subscribe(
      r => {
        if (!r.error) {
          this.contY = r.data.length
        }
      }
    )
  }
  percentAprob() {
    this.contractService.getContratosFiltered({ aprob: true }).subscribe(
      r => {
        if (!r.error) {
          this.aprobs = (r.data.length / this.conts) * 100
        }
      }
    )
  }
  countVenc() {
    this.contractService.getContratosFiltered({ x_venc: true }).subscribe(
      r => {
        if (!r.error) {
          this.venc = r.data.length
        }
      }
    )
  }

}
