import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActionsContComponent } from './actions-cont/actions-cont.component';
import { ListContComponent } from './list-cont/list-cont.component';
export const routes: Routes = [
    {
        path: '',
        component: ListContComponent
    },
    {
        path: 'mod/:id',
        component: ActionsContComponent
    },
    {
        path: 'add',
        component: ActionsContComponent
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
export class ContractsRoutingModule { }