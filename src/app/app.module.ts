import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    InfoModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    GestionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
