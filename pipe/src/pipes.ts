import { Component } from '@angular/core';

@Component({
    selector: 'pipes',
    template: `
        <h1>Pipes:</h1>
        <div>data:{{ date | date: 'yyyy-MM-dd' }}</div>
        <div>number: {{ 100.2968 | number: '1.2-2' }}</div>
        <div>currency: {{ 100.2968 | currency: 'CNY':true }}</div>
        <div>json: {{ jsonObj | json }}</div>
        <div>slice: {{ 'hello world' | slice:2:6 }}</div>
        <div>percent: {{ 1/3 | percent }}</div>
        <div>async: {{ asyncPipe | async }}</div>
        <div>custome: {{ 'ab|cd|efg' | customePipe }}</div>
    `
})
export class Pipes {
    date: Date = new Date();
    jsonObj = {
        name: 'jay',
        todo: 'something'
    };

    asyncPipe = new Promise((resolve, relect) => {
        setTimeout(() => resolve("OK"), 1000);
    }).then();
}