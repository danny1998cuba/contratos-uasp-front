import { NgModule } from '@angular/core';
import { ListContComponent } from './list-cont/list-cont.component';
import { ActionsContComponent } from './actions-cont/actions-cont.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ContractsRoutingModule } from './contracts-routing.module';
import { TableContComponent } from './list-cont/table-cont/table-cont.component';
import { MatTableModule } from '@angular/material/table'
import { MatSortModule } from '@angular/material/sort'
import { MatPaginatorModule } from '@angular/material/paginator';



@NgModule({
  declarations: [
    ListContComponent,
    ActionsContComponent,
    TableContComponent
  ],
  imports: [
    SharedModule,
    MatSortModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule
  ],
  exports:[
    ContractsRoutingModule
  ]
})
export class ContractsModule { }
