import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import * as fromComponents from './components/index';
import * as fromPipes from './pipes/index';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FullNamePipe } from './pipes/full-name.pipe';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  declarations: [...fromComponents.componets, ...fromPipes.pipes],
  exports : [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,
    ...fromComponents.componets,
    ...fromPipes.pipes
  ]
})
export class SharedModule { }
