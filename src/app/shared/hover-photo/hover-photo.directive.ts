import { Directive, HostListener, Renderer, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[HoverPhoto]'
})
export class HoverPhotoDirective {

  @Input() brightness = '';

  @HostListener('mouseenter') onHoverPhoto() {
    this.renderer.setElementStyle(this.el.nativeElement, 'filter', `brightness(${this.brightness})`);
  }

  @HostListener('mouseleave') offHoverPhoto() {
    this.renderer.setElementStyle(this.el.nativeElement, 'filter', 'brightness(100%)');
  }

  constructor(private renderer: Renderer, private el: ElementRef) { }

}
