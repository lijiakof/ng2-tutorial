import 'core-js';
import 'reflect-metadata';
import 'zone.js/dist/zone';

import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ChildComponent } from './child.component';

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, ChildComponent],
    bootstrap: [AppComponent]
})
export class Main { };

platformBrowserDynamic().bootstrapModule(Main);