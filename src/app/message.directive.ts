import { Directive, Input, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({ selector: '[myMessage]' })
export class MessageDirective {
    @Input('myMessage') message: string;
    constructor(private el: ElementRef, private render: Renderer2) {
        render.setStyle(el.nativeElement, 'cursor', 'pointer');
    }
    @HostListener('click') onclick() {
        if (this.el.nativeElement.innerHTML === 'Click Here') {
            this.el.nativeElement.innerHTML = this.message;
            this.render.setStyle(this.el.nativeElement, 'color', 'red');
        } else {
            this.el.nativeElement.innerHTML = 'Click Here';
            this.render.setStyle(this.el.nativeElement, 'color', 'blue');
        }
    }
}