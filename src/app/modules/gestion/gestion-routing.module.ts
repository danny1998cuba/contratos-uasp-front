import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContractsComponent } from './contracts/contracts.component';
import { ProvidersComponent } from './providers/providers.component';
import { UsersComponent } from './users/users.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'providers',
        component: ProvidersComponent
    },
    {
        path: 'contracts',
        component:ContractsComponent
    },
    {
        path: 'users',
        component: UsersComponent
    },
    {
        path: '**',
        redirectTo: '/home',
        pathMatch: 'full'
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GestionRoutingModule { }