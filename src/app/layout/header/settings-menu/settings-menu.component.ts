import { Component, Input, OnInit } from '@angular/core';
import { faSignOutAlt, faAngleRight, faQuestion, faComment, faMoon, faSun, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Authenticated } from 'src/app/core/utils';
import { User } from 'src/app/data/schema';
import { AuthService } from 'src/app/data/services/api';

@Component({
  selector: 'app-settings-menu',
  templateUrl: './settings-menu.component.html',
  styleUrls: ['./settings-menu.component.css']
})
export class SettingsMenuComponent implements OnInit {

  faSignOutAlt = faSignOutAlt;
  faAngleRight = faAngleRight;
  faQuestion = faQuestion;
  faComment = faComment;
  iconLight: IconDefinition

  isLight: boolean
  @Input() isOpen = false

  public activeUser!: User | undefined

  constructor(
    private authService: AuthService
  ) {
    this.isLight = localStorage.getItem("theme") == "light";
    this.iconLight = this.isLight ? faMoon : faSun
    this.loadActiveUser()
  }

  loadActiveUser() {
    this.activeUser = Authenticated.getUserFromLS
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

  logout() {
    this.authService.logout().subscribe(r => {
      if (r.error) {
        console.log('algo paso ' + r.msg)
      } else {
        console.log(r)
      }
    })
  }


}
