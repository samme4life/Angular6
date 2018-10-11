import {Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements  OnInit {

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }

  @HostBinding('style.backgroundColor')
  backgroundColor: string = 'aquamarine';

  @HostListener('mouseenter')
  mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = 'pink';
  }

  @HostListener('mouseleave')
  mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = 'transparent';
  }

}
