import 'core-js';
import 'reflect-metadata';
import 'zone.js/dist/zone';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HttpModule } from '@angular/http';

import { App } from './app';

@NgModule({
    imports: [BrowserModule, HttpModule],
    declarations: [App],
    //providers: [ ],
    bootstrap: [App]
})
export class Main { };

platformBrowserDynamic().bootstrapModule(Main);