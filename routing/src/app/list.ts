import { Component } from '@angular/core';

@Component({
    selector: 'list',
    template: `
        <ul>
            <li *ngFor="let item of list">
                <a routerLink="/detail">{{item.name}}</a>
            </li>
        </ul>
    `
})
export class List {
    list: Array<any>;
    constructor(){
        this.list = [{
            name: 'jay',
            age: 20
        },{
            name: 'min',
            age: 18
        },{
            name: 'qq',
            age: 18
        }];
    }
}