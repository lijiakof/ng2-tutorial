import { Directive, ElementRef, HostListener, Input, Renderer } from '@angular/core';

@Directive({
    selector: '[highlight]'
})
export class CustomeDirective {
    constructor(private el: ElementRef, private renderer: Renderer) { }

    @Input() highlight: string;

    @HostListener('mouseenter') onMouseEnter(){
        this.highlightIt('red');
    }

    @HostListener('mouseleave') onMouseLeave(){
        this.highlightIt(null);
    }

    private highlightIt(color: string) {
        this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', color);
    }
}