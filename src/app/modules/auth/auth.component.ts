import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';
import { faMoon, faSun, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/data/services/api';
import { GrowlComponent } from 'src/app/shared/components';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  username: string = ''
  password: string = ''

  iconLight: IconDefinition
  isLight: boolean

  @ViewChild('growl') growl !: GrowlComponent;

  constructor(
    private authService: AuthService
  ) {
    this.isLight = localStorage.getItem("theme") == "light";
    this.iconLight = this.isLight ? faMoon : faSun
  }

  ngOnInit(): void {
  }

  toggleDark() {
    document.body.classList.toggle('dark-theme');

    if (localStorage.getItem("theme") == "light") {
      localStorage.setItem("theme", "dark");
      this.iconLight = faSun;
    } else {
      localStorage.setItem("theme", "light");
      this.iconLight = faMoon
    }
  }

  submitLogin() {
    this.authService.login(this.username, this.password).subscribe(
      r => {
        if (r.error) {
          this.growl.data = { msg: r.msg, class: 'error', isHidden: false }
        }
      }
    )
  }

  isValid(params: NgModel[]) {
    return params.filter(f => !f.valid).length == 0;
  }

}
