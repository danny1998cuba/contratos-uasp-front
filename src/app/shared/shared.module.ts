import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import * as fromComponents from './components/index';
import * as fromPipes from './pipes/index';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { NgModelErrorsTranslatePipe } from './pipes/ng-model-errors-translate.pipe';
import { ContractPipe } from './pipes/contract.pipe';
import { GrowlComponent } from './components/growl/growl.component';
import { StatsCardComponent } from './components/stats-card/stats-card.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,
    MatTableModule,
    MatPaginatorModule,
    MatSelectModule
  ],
  declarations: [...fromComponents.componets, ...fromPipes.pipes],
  exports : [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,
    MatTableModule,
    MatPaginatorModule,
    MatSelectModule,
    ...fromComponents.componets,
    ...fromPipes.pipes
  ]
})
export class SharedModule { }
