# Angular 2 Tutorial

## Setup the development environment
* package.json
* tsconfig.json
* webpack.config.js

## TypeScript Quick Start
Please refer to：[TypeScript](https://github.com/lijiakof/typescript)

## Component
* How to create
    * `import { Component } from '@angular/core';`
    * `@Component({}) export class AppComponent { }`
    * `import { AppComponent } from '';`
    * `@NgModule({declarations: [AppComponent]})`
* Data Binding
* Nesting component
    * Input & Output

## Directive
* How to use
* attribute directives
    * [ngStyle]
    * [ngClass]
    * [NgPlural]
    * [ngSwitch]
    * [NgTemplateOutlet]
* structural directives
    * *ngFor
    * *ngIf
    * *NgPluralCase
    * *NgSwitchCase
    * *NgSwitchDefault
* other：
    * (click)
    * [(ngModel)]
* Custome Directive
    * `import { Directive, ElementRef, HostListener, Input, Renderer } from '@angular/core';`
    * `@Directive({ selector: 'customeDirective' }) export class CustomeDirective{ }`
    * `@Input() selectorName: string;`
    * `@NgModule({declarations: [ CustomeDirective ]})`
    * `<div [selectorName]></div>`

## Service
* How to create

## Routing
* How to use
    * index.html: `<base href="/" />`
    * App Component: `<router-outlet></router-outlet>`
    * routing.ts
    * `routerLink="/"`
* Routing with parameters

## Form
* [(ngModel)]

## HTTP
* How to use
    * `<meta charset="utf8">`
    * `import 'rxjs/add/operator/map';`
    * `import { Http, Headers, URLSearchParams } from '@angular/http';`
* set Headers
* json conver to URLSearchParams
* httpInterceptor

## Pipe
* How to use
    * `template:'<div>{{ data | pipe }}</div>'`
* Build-in Pipe
    * date
    * number
    * currency
    * json
    * slice
    * percent
    * async
* Custome Pipe
    * `import { Pipe, PipeTransform } from '@angular/core';`
    * `@Pipe({ selector: 'customePipe' }) export class CustomePipe implements PipeTransform{ }`
    * `@NgModule({declarations: [ Pipes, CustomePipe ]})`
    * `template:'<div>{{ data | customePipe }}</div>'`

## Input & Output

## Dependency Injection

## Webpack

## Use Webpack build the Angular 2 project
