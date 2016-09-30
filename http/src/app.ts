import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { HttpService } from './http-service';

@Component({
    selector: 'app',
    template: `
        <h1>Angular 2 is Running</h1>
        <button (click)="get()">http get</button>
        <ul>
            <li *ngFor="let place of places">{{place.fullName}}</li>
        </ul>
        <button (click)="post()">http post</button>
        <div>{{dataPost || dataPostError}}</div>
    `,
    providers: [ HttpService ]
})
export class App { 
    dataGetError: string;
    dataPost : string;
    dataPostError : string;
    places : any;

    constructor(private httpService: HttpService){}

    get() {
        this.httpService.getPlaces({city:'北京'}).subscribe(
            data => this.places = data.places,
            error => this.dataGetError = error,
            () => console.log('get complate')
        );
    }

    post() {
        this.httpService.postInquiry({var1:'北京',var2: 2}).subscribe(
            data  => this.dataPost = JSON.stringify(data),
            error => this.dataPostError = error,
            () => console.log('post complate')
        );
    }
    
};