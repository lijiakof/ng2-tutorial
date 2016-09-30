import 'core-js';
import 'reflect-metadata';
import 'zone.js/dist/zone';

import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { Pipes } from './pipes';
import { CustomePipe } from './Custome-pipe';

@NgModule({
    imports: [ BrowserModule ],
    declarations: [ Pipes, CustomePipe ],
    bootstrap: [ Pipes ]
})
export class Main { };

platformBrowserDynamic().bootstrapModule(Main);