import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { faSignOutAlt, faAngleRight, faQuestion, faComment, faMoon, faSun, IconDefinition } from '@fortawesome/free-solid-svg-icons';

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
  iconLight:IconDefinition

  isLight: boolean
  @Input() isOpen = false

  constructor(private eRef: ElementRef) {
    this.isLight = localStorage.getItem("theme") == "light";
    this.iconLight = this.isLight ? faSun : faMoon
  }

  ngOnInit(): void {
    
  }

  toggleDark() {
    document.body.classList.toggle('dark-theme');

    if (localStorage.getItem("theme") == "light") {
      localStorage.setItem("theme", "dark");
      this.iconLight = faMoon;
    } else {
      localStorage.setItem("theme", "light");
      this.iconLight = faSun
    }
  }

  
}
