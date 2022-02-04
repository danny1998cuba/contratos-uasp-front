import { NgModule } from '@angular/core';
import { ProvidersComponent } from './providers/providers.component';
import { UsersComponent } from './users/users.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { GestionRoutingModule } from './gestion-routing.module';

@NgModule({
  declarations: [
    ProvidersComponent,
    UsersComponent
  ],
  imports: [
    SharedModule
  ],
  exports:[
    GestionRoutingModule
  ]
})
export class GestionModule { }
