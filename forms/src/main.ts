import 'core-js';
import 'reflect-metadata';
import 'zone.js/dist/zone';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import {Forms} from './forms';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [Forms],
    bootstrap: [Forms]
})
export class Main { };

platformBrowserDynamic().bootstrapModule(Main);