import { Injectable } from '@angular/core';
import { DATAS } from './data-mock';

@Injectable()
export class DataService {
     get() {
         return Promise.resolve(DATAS);
     }
}