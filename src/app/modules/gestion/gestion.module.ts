import { NgModule } from '@angular/core';
import { ProvidersComponent } from './providers/providers.component';
import { UsersComponent } from './users/users.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { GestionRoutingModule } from './gestion-routing.module';
import { TableProvComponent } from './providers/table-prov/table-prov.component';
import { TableUsersComponent } from './users/table-users/table-users.component';
import { MatTableModule } from '@angular/material/table'
import { MatSortModule } from '@angular/material/sort'

@NgModule({
  declarations: [
    ProvidersComponent,
    UsersComponent,
    TableProvComponent,
    TableUsersComponent
  ],
  imports: [
    SharedModule,
    MatTableModule,
    MatSortModule
  ],
  exports: [
    GestionRoutingModule
  ]
})
export class GestionModule { }
