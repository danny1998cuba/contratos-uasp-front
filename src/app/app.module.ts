import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import es from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
registerLocaleData(es);

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { HomeComponent } from './modules/home/home.component';
import { PersonalComponent } from './modules/personal/personal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InfoContsComponent } from './modules/info-conts/info-conts.component';
import { GestionModule } from './modules/gestion/gestion.module';
import { FilterFormComponent } from './modules/info-conts/filter-form/filter-form.component';
import { InfoModalComponent } from './modules/info-conts/info-modal/info-modal.component';
import { AuthComponent } from './modules/auth/auth.component';
import { CookieService } from 'ngx-cookie-service';
import { PassFormComponent } from './modules/personal/pass-form/pass-form.component';
import { InfoFormComponent } from './modules/personal/info-form/info-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SkeletonComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    PersonalComponent,
    InfoContsComponent,
    FilterFormComponent,
    InfoModalComponent,
    AuthComponent,
    PassFormComponent,
    InfoFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    GestionModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: "es-ES" },
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
