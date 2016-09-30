import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Index } from './app/index';
import { List } from './app/list';
import { Detail } from './app/detail';

const ROUTES: Routes = [{
    path: '',
    component: Index
}, {
    path: 'list',
    component: List
}, {
    path: 'list/:offset/:limit',
    component: List
}, {
    path: 'detail',
    component: Detail
}]
export const Routing : ModuleWithProviders = RouterModule.forRoot(ROUTES);