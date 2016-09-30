# Angular 2 入门指南

## 开发环境搭建
    * package.json
    * tsconfig.json
    * webpack.config.js
## TypeScript 速成
这部分内容可以参考这篇文章：[TypeScript](https://github.com/lijiakof/typescript)
## Component & Directive
    * Component
    * Data Binding
    * Directive
        * How to use
        * 内置指令：
            * *ngFor
            * *ngIf
            * [ngStyle]
            * [ngClass]
            * [NgPlural]
            * *NgPluralCase
            * [ngSwitch]
            * *NgSwitchCase
            * *NgSwitchDefault
            * [NgTemplateOutlet]
            * (click)
            * [(ngModel)]
        * 自定义指令
    * Component 的嵌套
        * Input & Output
## Service
## Routing
    * How to use
        * index.html: <base href="/" />
        * App Component: <router-outlet></router-outlet>
        * routing.ts
        * routerLink="/"
    * 跳转和页面之间的值传递
## Form
    * [(ngModel)]
## HTTP
    * How to use
        * <meta charset="utf8">
        * import 'rxjs/add/operator/map';
        * import { Http, Headers, URLSearchParams } from '@angular/http';
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
    * 自定义管道
        * import { Pipe, PipeTransform } from '@angular/core';
        * CustomePipe implements PipeTransform
        * declarations: [ Pipes, CustomePipe ]
## Dependency Injection
## Webpack
## WebApp 项目搭建
