import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'customePipe'
})
export class CustomePipe implements PipeTransform {
    transform(value: string): string[]{
        return value.split("|");
    }
};