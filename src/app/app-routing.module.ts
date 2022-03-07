import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard, NoAuthGuard } from './core/guards';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';
import { AuthComponent } from './modules/auth/auth.component';
import { HelpComponent } from './modules/help/help.component';
import { HomeComponent } from './modules/home/home.component';
import { InfoContsComponent } from './modules/info-conts/info-conts.component';
import { PersonalComponent } from './modules/personal/personal.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: AuthComponent,
    canActivate: [NoAuthGuard]
  },
  {
    path: '',
    component: SkeletonComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'gestion',
        loadChildren: () =>
          import('./modules/gestion/gestion.module').then((m) => m.GestionModule)
      },
      {
        path: 'stats',
        component: InfoContsComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'personal',
        component: PersonalComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'help',
        component: HelpComponent,
        canActivate: [AuthGuard]
      },
      {
        path: '**',
        redirectTo: '/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
