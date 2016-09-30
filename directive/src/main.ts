import 'core-js';
import 'reflect-metadata';
import 'zone.js/dist/zone';

import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { Directives } from './directives'
import { CustomeDirective } from './custome-directive'

@NgModule({
    imports: [BrowserModule],
    declarations: [Directives, CustomeDirective],
    bootstrap: [Directives]
})
export class Main { };

platformBrowserDynamic().bootstrapModule(Main);