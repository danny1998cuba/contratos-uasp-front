import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgYasYearPickerComponent } from 'ngy-year-picker';
import { FormStyle } from 'src/app/data/interfaces';
import { Provider } from 'src/app/data/schema';

@Component({
  selector: 'app-filter-form',
  templateUrl: './filter-form.component.html',
  styleUrls: ['./filter-form.component.css']
})
export class FilterFormComponent implements OnInit, AfterViewInit {

  @Input() providers: Provider[] = [{ id: 0, nombre: 'Alguien', activo: true }]
  @Input() styles !: FormStyle

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

  ngOnInit(): void {
  }



  compareObjects(ob1: any, ob2: any) { return (ob1 && ob2) ? ob1.id === ob2.id : false }

}
