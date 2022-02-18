import { HttpStatusCode } from '@angular/common/http';
import { Component, DoCheck, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { faEdit, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { User } from 'src/app/data/schema';
import { UserService } from 'src/app/data/services/api';
import { ActionButtonComponent } from 'src/app/shared/components';
import { FormUserComponent } from './form-user/form-user.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements DoCheck {

  public data: User[] = []
  public style = {
    height: '0px'
  }
  isLoading = true
  faPlus = faPlus; faEdit = faEdit; faTrash = faTrash

  @ViewChild('addForm') form1 !: FormUserComponent;
  @ViewChild('modForm') form2 !: FormUserComponent;
  @ViewChild('_addBtn') _addBtn !: ActionButtonComponent;
  @ViewChild('_modBtn') _modBtn !: ActionButtonComponent;

  constructor(
    private userService: UserService,
    private router: Router
  ) {
    this.refreshData()
  }

  ngDoCheck(): void {
    if (this.form1 || this.form2) {
      this.resizeFormContainer()
    }
  }

  selected !: User | undefined
  getSelected(val: User) {
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

  addProvider(user: User) {
    this.userService.createUser(user).subscribe(
      r => {
        if (r.status = HttpStatusCode.Created) {
          this.isLoading = true;
          this.refreshData()
          setTimeout(() => {
            alert(r.msg)
          }, 1000);
        } else {
          alert(r.error)
        }
      }
    )
  }

  modProvider(user: User) {
    console.log(user)
    this.userService.updateUser(user.id, user).subscribe(
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
    this.userService.getUsers().subscribe(
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
