import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';

@Injectable()
export class HttpService {
    constructor(private http: Http) { }
    
    getPlaces(params) {
        let p = new URLSearchParams();
        for(let key in params) {
            p.set(key, params[key]);
        }
        let headers = new Headers();
        //headers.append('Content-Type', 'application/json;');
        
        return this.http.get("http://api.baichanghui.com/productservice/places/search", {
            search: p,
            headers: headers
        })
            .map(resp => resp.json());
    }

    postInquiry(json) {
        let headers = new Headers();
        //headers.append('Content-Type', 'application/json; charset=UTF-8');

        return this.http.post('http://api.baichanghui.com/orderservice/inquiries', json , {
            headers: headers
        }).map(resp => resp.json());
    }
}