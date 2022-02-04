import { NgModule } from '@angular/core';
import { ListContComponent } from './list-cont/list-cont.component';
import { ActionsContComponent } from './actions-cont/actions-cont.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ContractsRoutingModule } from './contracts-routing.module';



@NgModule({
  declarations: [
    ListContComponent,
    ActionsContComponent
  ],
  imports: [
    SharedModule
  ],
  exports:[
    ContractsRoutingModule
  ]
})
export class ContractsModule { }
