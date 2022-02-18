import { JsonPipe } from '@angular/common';
import { HttpStatusCode } from '@angular/common/http';
import { Component, DoCheck, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Provider } from 'src/app/data/schema';
import { ProviderService } from 'src/app/data/services/api';
import { FormProvComponent } from './form-prov/form-prov.component';
import { faPlus, faEdit } from '@fortawesome/free-solid-svg-icons'
import { ActionButtonComponent } from 'src/app/shared/components';

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
  faPlus = faPlus; faEdit = faEdit

  @ViewChild('addForm') form1 !: FormProvComponent;
  @ViewChild('modForm') form2 !: FormProvComponent;
  @ViewChild('_addBtn') _addBtn !: ActionButtonComponent;
  @ViewChild('_modBtn') _modBtn !: ActionButtonComponent;

  constructor(
    private providerService: ProviderService,
    private router: Router
  ) {
    this.refreshData()
  }

  ngDoCheck(): void {
    if (this.form1 || this.form2) {
      this.resizeFormContainer()
    }
  }

  selected !: Provider | undefined
  getSelected(val: Provider) {
    this.selected = val
    if (!this.selected && this.form2 && this.form2.styles.showing) {
      this.addBtn()
    }
  }

  resizeFormContainer() {
    var form = document.querySelector('.form-container form.showing');
    if (form) {
      this.style.height = form.scrollHeight + 'px';
    }
  }

  addProvider(prov: Provider) {
    this.providerService.createProvider(prov).subscribe(
      r => {
        if (r.status = HttpStatusCode.Created) {
          this.isLoading = true;
          this.refreshData()
        } else {
          alert(r.error)
        }
      }
    )
  }

  modProvider(prov: Provider) {
    console.log(prov)
    this.providerService.updateProvider(prov.id, prov).subscribe(
      r => {
        if (r.status = HttpStatusCode.Ok) {
          this.isLoading = true;
          this.refreshData()
        } else {
          alert(r.error)
        }
      }
    )
  }

  refreshData() {
    this.providerService.getProviders().subscribe(
      r => {
        if (!r.error) {
          this.data = r.data;
          console.log(r.status)
          setTimeout(() => this.isLoading = false, 1000)
        } else {
          console.log(r.msg + '\nStatus: ' + r.status);
          this.router.navigateByUrl('/home');
        }
      }
    )
  }

  addBtn() {
    this.form1.styles.style = {
      transform: 'translateX(0px)'
    }
    this.form2.styles.style = {
      transform: 'translateX(0px)'
    }

    this.form1.styles.showing = true
    this.form2.styles.showing = false

    this._addBtn.formSelected = true
    this._modBtn.formSelected = false

    this.resizeFormContainer()
  }

  modBtn() {
    this.form1.styles.style = {
      transform: 'translateX(-110%)'
    }
    this.form2.styles.style = {
      transform: 'translateX(-110%)'
    }

    this.form1.styles.showing = false
    this.form2.styles.showing = true

    this._addBtn.formSelected = false
    this._modBtn.formSelected = true

    this.resizeFormContainer()
  }
}
