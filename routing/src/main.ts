import 'core-js';
import 'reflect-metadata';
import 'zone.js/dist/zone';

import { NgModule } from '@angular/core';
import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { FormsModule } from '@angular/forms';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Routing } from './routing';
import { App } from './app/app';
import { Index } from './app/index';
import { List } from './app/list';
import { Detail } from './app/detail';

@NgModule({
    imports: [Routing, BrowserModule, FormsModule],
    declarations: [App, Index, List, Detail],
    providers: [],
    bootstrap: [App]
})
export class Main { };

platformBrowserDynamic().bootstrapModule(Main);