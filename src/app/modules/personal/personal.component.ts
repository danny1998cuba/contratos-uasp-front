import { HttpStatusCode } from '@angular/common/http';
import { Component, DoCheck, ViewChild } from '@angular/core';
import { faAngleRight, faEdit, faKey } from '@fortawesome/free-solid-svg-icons';
import { Authenticated } from 'src/app/core/utils';
import { User } from 'src/app/data/schema';
import { UserService } from 'src/app/data/services/api';
import { GrowlComponent } from 'src/app/shared/components';
import { InfoFormComponent } from './info-form/info-form.component';
import { PassFormComponent } from './pass-form/pass-form.component';

declare var resizeFormContainer: any;
declare var common: {
  add: () => void,
  mod: () => void
};

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements DoCheck {

  public user!: User

  angle = faAngleRight

  isLoading = true
  faKey = faKey; faEdit = faEdit

  @ViewChild('infoForm') form1 !: InfoFormComponent;
  @ViewChild('passForm') form2 !: PassFormComponent;
  @ViewChild('growl') growl !: GrowlComponent;

  constructor(
    private userService: UserService
  ) {
    this.loadUser()
    this.notLoading()
  }

  notLoading() {
    setTimeout(() => {
      this.isLoading = false
    }, 1000);
  }

  loadUser() {
    let u = Authenticated.getUserFromLS
    if (u) {
      this.user = u
    } else {
      this.user = new User()
    }
  }

  ngDoCheck(): void {
    if (this.form1 || this.form2) {
      resizeFormContainer()
    }
  }

  isAdmin(): boolean {
    return Authenticated.isAdmin
  }

  isCont(): boolean {
    return Authenticated.isCont
  }

  modInfo(user: User) {
    this.userService.updateUser(user.id, user).subscribe(
      r => {
        if (r.status == HttpStatusCode.Ok) {
          this.isLoading = true;
          this.notLoading()
        } else {
          this.growl.data = {
            msg: r.msg,
            class: 'error',
            isHidden: false
          }
        }
      }
    )
  }

  changePass(data: {
    oldPass: string,
    newPass: string
  }) {
    this.userService.changePass(this.user.id, data.oldPass, data.newPass).subscribe(
      r => {
        if (!r.error) {
          this.growl.data = {
            msg: r.data,
            class: 'success',
            isHidden: false
          }
        } else {
          this.growl.data = {
            msg: r.msg,
            class: 'error',
            isHidden: false
          }
        }
      }
    )
  }

  addBtn() {
    common.add()
  }

  modBtn() {
    common.mod()
  }

}
