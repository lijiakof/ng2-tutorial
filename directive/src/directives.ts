import { Component } from '@angular/core';
import { CustomeDirective } from './custome-directive'

@Component({
    selector: 'directives',
    template: `
        <h1>Directives</h1>
        <div>
            *ngFor
            <ul>
                <li *ngFor="let name of names">{{name}}</li>
            </ul>
        </div>
        <div>
            *ngIf
            <div>
                <button (click)="show()">show</button>:
                <span *ngIf="showNmae">Hello</span>
            </div><br/>
        </div>
        <div>
            [ngStyle]
            <div>
                <button (click)="changeStyle()">changeStyle</button>:
                <span [ngStyle]="theStyle">Hello</span>
            </div><br/>
        </div>
        <div>
            Custome Directive 
            <p [highlight]="red">Highliht me</p>
        </div>
    `
})
export class Directives {
    names : string[] = ['Jay', 'Lily', 'Mini'];
    showNmae: boolean;
    theStyle: any;
    show(){
        this.showNmae = true;
    }
    changeStyle(){
        this.theStyle = {'color':'red'};
    }
}