import { HttpStatusCode } from '@angular/common/http';
import { Component, DoCheck, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { faEdit, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Rol, User } from 'src/app/data/schema';
import { UserService } from 'src/app/data/services/api';
import { ActionButtonComponent, GrowlComponent, ModalComponent } from 'src/app/shared/components';
import { FormUserComponent } from './form-user/form-user.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements DoCheck {

  public data: User[] = []
  public roles: Rol[] = []
  public style = {
    height: '0px'
  }
  isLoading = true
  faPlus = faPlus; faEdit = faEdit; faTrash = faTrash

  @ViewChild('addForm') form1 !: FormUserComponent;
  @ViewChild('modForm') form2 !: FormUserComponent;
  @ViewChild('_addBtn') _addBtn !: ActionButtonComponent;
  @ViewChild('_modBtn') _modBtn !: ActionButtonComponent;
  @ViewChild('modal') modal !: ModalComponent;
  @ViewChild('growl') growl !: GrowlComponent;

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
        if (r.status == HttpStatusCode.Created) {
          this.isLoading = true;
          this.refreshData()
          setTimeout(() => {
            alert(r.msg)
          }, 1000);
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

  modProvider(user: User) {
    console.log(user)
    this.userService.updateUser(user.id, user).subscribe(
      r => {
        if (r.status == HttpStatusCode.Ok) {
          this.isLoading = true;
          this.refreshData()
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

  delProvider() {
    if (this.selected)
      this.userService.deleteUser(this.selected.id).subscribe(
        r => {
          if (r.status == HttpStatusCode.Ok) {
            this.isLoading = true;
            this.refreshData()
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

  refreshData() {
    this.userService.getUsers().subscribe(
      r => {
        if (!r.error) {
          this.data = r.data;
          console.log(r.status)
          this.loadRoles()
          setTimeout(() => this.isLoading = false, 1000)
        } else {
          this.router.navigateByUrl('/home');
        }
      }
    )
  }

  loadRoles() {
    this.userService.getRoles().subscribe(
      r => {
        if (!r.error) {
          this.roles = r.data;
        } else {
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

  delBtn() {
    this.modal.openModal()
  }
}
