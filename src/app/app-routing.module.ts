import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';
import { HelpComponent } from './modules/help/help.component';
import { HomeComponent } from './modules/home/home.component';
import { PersonalComponent } from './modules/personal/personal.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: SkeletonComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'gestion',
        loadChildren: () =>
          import('./modules/gestion/gestion.module').then((m) => m.GestionModule)
      },
      {
        path:'personal',
        component:PersonalComponent
      },
      {
        path:'help',
        component:HelpComponent
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
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
