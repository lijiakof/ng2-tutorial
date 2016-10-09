import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Component } from '@angular/core';

@Component({
    selector: 'list',
    template: `
        List
    `
})
export class List {
    constructor() {

    }
}

export const routes = [
    { path: '', component: List, pathMatch: 'full' }
];

@NgModule({
    declarations: [List],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(routes),
    ]
})
export default class ListModule {
    static routes = routes;
}