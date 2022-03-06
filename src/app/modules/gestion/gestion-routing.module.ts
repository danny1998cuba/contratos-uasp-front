import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
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
        component: ProvidersComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'contracts',
        component:ContractsComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'users',
        component: UsersComponent,
        canActivate: [AuthGuard]
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