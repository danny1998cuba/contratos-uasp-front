import { Component, DoCheck, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Provider } from 'src/app/data/schema';
import { ProviderService } from 'src/app/data/services/api';
import { FormProvComponent } from './form-prov/form-prov.component';

@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.css']
})
export class ProvidersComponent implements DoCheck {

  public data: Provider[] = [];
  public style = {
    height: '0px'
  }
  isLoading = true

  @ViewChild('addForm') form1 !: FormProvComponent;

  constructor(
    private providerService: ProviderService,
    router: Router
  ) {
    this.providerService.getProviders().subscribe(
      r => {
        if (!r.error) {
          this.data = r.data;
          console.log(r.status)
          setTimeout(() => this.isLoading = false, 1000)
        } else {
          console.log(r.msg + '\nStatus: ' + r.status);
          router.navigateByUrl('/home');
        }
      }
    )
  }

  ngDoCheck(): void {
    if (this.form1) {
      this.resizeFormContainer()
    }
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
