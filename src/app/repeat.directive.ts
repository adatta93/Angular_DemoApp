import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({ selector: '[myRepeat]' })
export class RepeatDirective {
    
    constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) { }
    
    @Input() set myRepeat(count: number) {
        for (let i = 0; i < count; i++) {
            this.viewContainer.createEmbeddedView(this.templateRef);
        }
    }
}