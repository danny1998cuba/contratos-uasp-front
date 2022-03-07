import { Component } from '@angular/core';
import { faMoon, faSun, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Authenticated } from 'src/app/core/utils';
import { User } from 'src/app/data/schema';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  iconLight: IconDefinition
  isLight: boolean

  public activeUser!: User | undefined

  constructor() {
    this.isLight = localStorage.getItem("theme") == "light";
    this.iconLight = this.isLight ? faMoon : faSun
    this.activeUser = Authenticated.getUserFromLS
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

}
