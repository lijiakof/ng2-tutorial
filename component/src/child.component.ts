import { Component } from '@angular/core';

@Component({
    selector: 'child-component',
    template: `
        <div class="child-component">
            <div>this is Child</div>
            <div>input: {{name}}</div>
            <div>output:<input type="text"></div>
        </div>
    `,
    inputs: ['name'],
    outputs: ['result'],
    styles: [`
        .child-component {
            border: 1px solid #ccc;
            background-color: #eee;
            margin: 15px;
        }
    `]
})
export class ChildComponent {
    name: string;
    result: string;
}