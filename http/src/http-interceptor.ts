import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';

@Injectable()
export class HttpClient {
    constructor(private http: Http) {
        this.http = http;
    }

    get(url, query) {
        
    }
}