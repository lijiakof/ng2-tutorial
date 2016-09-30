import { Component } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
    selector: 'index',
    template: `
        <div>index page</div>
        <button (click)="toList()">click to list</button>
        <a [routerLink]="['/list', 2, 10]">link to list</a>
    `
})

export class Index {
    name: string;
    constructor(private router: Router) {
        this.name = "jay";
    }
    toList(){
        this.router.navigate(['/list', 1, 10]);
    }
}