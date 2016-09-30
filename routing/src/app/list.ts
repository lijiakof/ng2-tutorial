import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'list',
    template: `
        <ul>
            <li *ngFor="let item of list">
                <a routerLink="/detail">{{item.name}}</a>
            </li>
        </ul>
        <div>limit:{{limit}}&offset:{{offset}}</div>
    `
})
export class List implements OnInit {
    list: Array<any>;
    limit: number;
    offset: number;
    constructor(private route: ActivatedRoute){
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

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.limit = params['limit'];
            this.offset = params['offset'];
            console.log(params);
        });
    }
}