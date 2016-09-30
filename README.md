# Angular 2 入门指南

## 开发环境搭建
* package.json
* tsconfig.json
* webpack.config.js

## TypeScript 速成
这部分内容可以参考这篇文章：[TypeScript](https://github.com/lijiakof/typescript)

## Component
* How to use
    * `import { Component } from '@angular/core';`
    * `export class AppComponent { }`
    * `import { AppComponent } from '';`
    * `@NgModule({declarations: [AppComponent]})`
* Data Binding
* Component 的嵌套
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

## Service

## Routing
* How to use
    * index.html: `<base href="/" />`
    * App Component: `<router-outlet></router-outlet>`
    * routing.ts
    * `routerLink="/"`
* 跳转和页面之间的值传递

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
* 内置管道
    * date
    * number
    * currency
    * json
    * slice
    * percent
    * async
* Custome Pipe
    * `import { Pipe, PipeTransform } from '@angular/core';`
    * `CustomePipe implements PipeTransform`
    * `@NgModule({declarations: [ Pipes, CustomePipe ]})`

## Input & Output

## Dependency Injection

## Webpack

## WebApp 项目搭建
