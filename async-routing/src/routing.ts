import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Index } from './app/index';

const ROUTES: Routes = [{
    path: '',
    component: Index
}, {
    path: 'list',
    loadChildren: () => System.import('./app/list.module')
}]
export const Routing : ModuleWithProviders = RouterModule.forRoot(ROUTES);