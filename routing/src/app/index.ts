import { Component } from '@angular/core';

@Component({
    selector: 'index',
    template: `
        <div>index page</div>
    `
})

export class Index {
    name: string;
    constructor() {
        this.name = "jay";
    }
}