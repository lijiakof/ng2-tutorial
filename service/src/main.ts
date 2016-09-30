import 'core-js';
import 'reflect-metadata';
import 'zone.js/dist/zone';

import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { App } from './app';

@NgModule({
    imports: [BrowserModule],
    declarations: [App],
    bootstrap: [App]
})
export class Main { };

platformBrowserDynamic().bootstrapModule(Main);