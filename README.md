# Angular 2 Tutorial
*This is my first notes use English.*

In this article ,you can learnning:

* How to setup the development environment
* TypeScript
* How to use component
* How to use directive
* How to use service
* How to use router
* Forms
* How to use http
* How to use pipe
* Input & Output
* Dependency Injection
* Webpack
* How to build the Angular 2 project with Webpack

## Setup the development environment
* install node
* package.json
* tsconfig.json
* webpack.config.js
* npm install
* npm run build
* npm run serve


You can refer to: [Angular 2 Webpack Starter](https://github.com/lijiakof/ng2-webpack-starter)

## TypeScript Quick Start
Please refer to: [TypeScript](https://github.com/lijiakof/typescript)

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
* Attribute directives
    * [ngStyle]
    * [ngClass]
    * [NgPlural]
    * [ngSwitch]
    * [NgTemplateOutlet]
* Structural directives
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
    * `export interface DataModel`
    * mock up data
    * `import { Injectable } from '@angular/core';`
* How to use
    * `@Injectable() export class DataService {}`
    * `@Component({ providers: [DataService] })`
    * `this.dataService.get().then(data => this.datas = data);`

## Routing
* How to use
    * index.html: `<base href="/" />`
    * App Component: `<router-outlet></router-outlet>`
    * routing.ts
    * `routerLink="/"`
* Routing with parameters
* Async Routing
    * setup webpack 2.0
        * npm install webpack@2.1.0-beta.22
        * npm install webpack-dev-server@2.1.0-beta.2
        * npm install webpack-dev-middleware@1.6.1
        * probably has some error: uninstall then install webpack & webpack-dev-server & webpack-dev-middlewar
    * setup loader: string-replace-loader
    * webpack.config.js
        * preLoaders
        * postLoaders
        * exprContextCritical: false
    * typings.d.ts
    * create child module & component
    * create async router: `loadChildren: () => System.import('./app/list.module')`

## Form
* `import { FormsModule } from '@angular/forms';`
* `NgModule({ imports: [FormsModule] })`
* `import { NgForm } from '@angular/forms';`
* `<form #f="ngForm" (ngSubmit)="onSubmit(f)">`
* `<input type="text" [(ngModel)]="user.name" name="name" required #name="ngModel" />`
* `<button [disabled]="!f.form.valid" type="submit">submit</button>`

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

## Use with jQuery

## Input & Output

## Dependency Injection

## Webpack
refer to: [Webpack](https://github.com/lijiakof/frontend-book/blob/master/share/webpack.md)

* loaders
    * string-replace-loader
    * angular2-template-loader
    * awesome-typescript-loader
    * sass-loader (need node-sass)
    * raw-loader
    * autoprefixer postcss-loader
* plugins
    * html-webpack-plugin
    * copy-webpack-plugin
* dev tools
    * webpack-dev-server
    * webpack-dev-middleware
* others
    * __dirname: current module file‘s absolute path
    * you'd butter use `path.resolve(__dirname, "app/folder")` to compatible win

## Use Webpack build the Angular 2 project
