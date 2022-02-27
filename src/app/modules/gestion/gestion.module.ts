import { NgModule } from '@angular/core';
import { ProvidersComponent } from './providers/providers.component';
import { UsersComponent } from './users/users.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { GestionRoutingModule } from './gestion-routing.module';
import { TableProvComponent } from './providers/table-prov/table-prov.component';
import { TableUsersComponent } from './users/table-users/table-users.component';
import { MatTableModule } from '@angular/material/table'
import { MatSortModule } from '@angular/material/sort';
import { FormProvComponent } from './providers/form-prov/form-prov.component';
import { FormUserComponent } from './users/form-user/form-user.component';
import { ContractsComponent } from './contracts/contracts.component';
import { FormContComponent } from './contracts/form-cont/form-cont.component'

@NgModule({
  declarations: [
    ProvidersComponent,
    UsersComponent,
    TableProvComponent,
    TableUsersComponent,
    FormProvComponent,
    FormUserComponent,
    ContractsComponent,
    FormContComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    GestionRoutingModule
  ]
})
export class GestionModule { }
