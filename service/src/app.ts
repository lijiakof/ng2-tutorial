import { Component } from '@angular/core';
import { DataService } from './data-service';
import { DataModel } from './data-model';

@Component({
    selector: 'app',
    template: `
        <h1>Service</h1>
        <ul>
            <li *ngFor="let item of datas">{{item.name}}</li>
        </ul>
    `,
    providers: [DataService]
})
export class App {
    datas : DataModel[];

    constructor(private dataService: DataService) {
        this.dataService.get().then(data => this.datas = data);
    }
}