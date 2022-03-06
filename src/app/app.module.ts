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
import { SettingsMenuComponent } from './layout/header/settings-menu/settings-menu.component';
import { HomeComponent } from './modules/home/home.component';
import { PersonalComponent } from './modules/personal/personal.component';
import { HelpComponent } from './modules/help/help.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InfoContsComponent } from './modules/info-conts/info-conts.component';
import { GestionModule } from './modules/gestion/gestion.module';
import { FilterFormComponent } from './modules/info-conts/filter-form/filter-form.component';
import { InfoModalComponent } from './modules/info-conts/info-modal/info-modal.component';
import { AuthComponent } from './modules/auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    SkeletonComponent,
    FooterComponent,
    HeaderComponent,
    SettingsMenuComponent,
    HomeComponent,
    PersonalComponent,
    HelpComponent,
    InfoContsComponent,
    FilterFormComponent,
    InfoModalComponent,
    AuthComponent
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
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
