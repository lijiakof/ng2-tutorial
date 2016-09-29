import { Component } from '@angular/core';

@Component({
    selector: 'app-component',
    template: `
        <h1>this is the component</h1>
        <ul>
            <li *ngFor="let item of list" 
                (click)="select(item)"
                [ngStyle]="{'color':'red'}">{{item}}</li>
        </ul>
        <div *ngIf="selectItem">Select:{{selectItem}}</div>
        <input type="text" [(ngModel)]="selectItem">
        <br/><br/><br/>
        <div>Parent Component</div>
        <div>output from child:</div>
        <div>input to child: <input type="text" [(ngModel)]="appName"></div>
        <child-component [name]="appName"></child-component>
    `
})
export class AppComponent {
    public list : string[];
    public selectItem : string;
    public user: string;
    constructor(){
        this.list = ['Jay', 'Min', 'Lily'];
    }

    select(item) {
        this.selectItem = item;
    }
}