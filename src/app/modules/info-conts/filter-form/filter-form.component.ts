import { JsonPipe } from '@angular/common';
import { AfterViewInit, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { NgYasYearPickerComponent } from 'ngy-year-picker';
import { ContractFilters, FormStyle } from 'src/app/data/interfaces';
import { Provider } from 'src/app/data/schema';

@Component({
  selector: 'app-filter-form',
  templateUrl: './filter-form.component.html',
  styleUrls: ['./filter-form.component.css']
})
export class FilterFormComponent implements AfterViewInit {

  @Input() providers: Provider[] = [{ id: 0, nombre: 'Alguien', activo: true }]
  @Input() styles !: FormStyle

  @Output() emitter = new EventEmitter()

  provId?: number; isProv: boolean = false
  dict: boolean = false; isDict: boolean = false
  aprob: boolean = false; isAprob: boolean = false
  vig: boolean = false; isVig: boolean = false
  x_venc: boolean = false;
  year?: number; isYear: boolean = false

  @ViewChild('yearpick') yearpick !: NgYasYearPickerComponent

  constructor() { }
  ngAfterViewInit(): void {
    this.yearpick.yearList = this.generateYears()
    this.yearpick._value = new Date().getFullYear()
  }

  generateYears(): any[] {
    let currentYear = new Date().getFullYear()
    var list: number[] = []

    for (let y = currentYear; y > currentYear - 15; y--) {
      list.push(y)
    }

    return list
  }

  compareObjects(ob1: any, ob2: any) { return (ob1 && ob2) ? ob1.id === ob2.id : false }

  cleared() {
    let filters :ContractFilters = {}
    this.emitter.emit(filters)
  }

  submit() {
    let filters: ContractFilters = {
      provId: this.isProv ? this.provId : undefined,
      dict: this.isDict ? this.dict : undefined,
      aprob: this.isAprob ? this.aprob : undefined,
      vig: this.isVig ? this.vig : undefined,
      x_venc: this.x_venc ? this.x_venc : undefined,
      year: this.isYear ? this.year : undefined
    }
    this.emitter.emit(filters)
  }

}
