import { Component } from '@angular/core';

@Component({
    selector: 'app',
    template: `
        <nav>
            <a routerLink="/">index</a>
            <a routerLink="/list">list</a>
        </nav>
        <router-outlet></router-outlet>
    `,
    styles: [`
        nav {
            line-height: 44px;
            padding: 0 10px;

            
        }
        nav a {
            min-width: 80px;
            text-align: center;
            display: inline-block;
        }
    `]
})
export class App { 
    constructor() {}
}