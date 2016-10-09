import 'core-js';
import 'reflect-metadata';
import 'zone.js/dist/zone';

import { NgModule, Component, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Routes, RouterModule } from '@angular/router';

import {Routing} from './routing';
import { Index } from './app/index';

@Component({
    selector: 'app',
    template: `
        <router-outlet></router-outlet>
    `
})
export class App { }

@NgModule({
    imports: [Routing, BrowserModule],
    declarations: [App, Index],
    bootstrap: [App]
})
export class Main { };

platformBrowserDynamic().bootstrapModule(Main);