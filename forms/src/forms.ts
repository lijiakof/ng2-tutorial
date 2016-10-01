import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'forms',
    template: `
        <h1>Forms</h1>
        <form #f="ngForm" (ngSubmit)="onSubmit(f)" novalidate>
            <div>
                <label>name:</label>
                <input type="text"
                    [(ngModel)]="user.name"
                    name="name"
                    required 
                    #name="ngModel" />
            </div>
            <div>
                <label>phone:</label>
                <input type="text"
                    [(ngModel)]="user.phone"
                    name="phone"
                    required
                    #phone="ngModel" />
            </div>
            <div>
                <label>email:</label>
                <input type="text"
                    [(ngModel)]="user.email"
                    name="email"
                    required />
            </div>
            <button [disabled]="!f.form.valid" type="submit">submit</button>
        </form>
        <p>
            name value: {{name.value}}(valid: {{name.valid}})<br/>
            phone value: {{phone.value}}(valid: {{phone.valid}})<br/>
        </p>
    `,
    styles: [`
        label {
            width: 80px;
            display: inline-block;
        }
    `]
})
export class Forms {
    user: any;
    constructor(){
        this.user = {
            name: 'jay'
        };
    }
    onSubmit(f) {
        console.log(f);
    }
}