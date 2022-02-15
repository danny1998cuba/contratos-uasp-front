import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Provider } from 'src/app/data/schema';
import { ProviderService } from 'src/app/data/services/api';
import { FormProvComponent } from './form-prov/form-prov.component';

@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.css']
})
export class ProvidersComponent implements AfterViewInit, OnInit {

  public data: Provider[] = [];
  public style = {
    height: '0px'
  }

  @ViewChild('addForm') form1 !: FormProvComponent;

  constructor(private providerService: ProviderService) { }

  ngOnInit(): void {
    this.providerService.getProviders().subscribe(
      data => this.data = data
    )
  }

  ngAfterViewInit(): void {
    this.resizeFormContainer()
    console.log("Data" + this.data)
  }

  selected !: Provider | undefined
  getSelected(val: Provider) {
    this.selected = val;
    if (this.form1)
      this.form1.selected = val;
  }

  resizeFormContainer() {
    var form = document.querySelector('.form-container form.showing');
    if (form) {
      this.style.height = form.scrollHeight + 'px';
    }
  }

  submited() {

  }
}
