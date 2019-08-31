import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[HoverMouse]'
})
export class HoverMouseDirective {

  @HostBinding('style.backgroundColor') backgroundHoverColor: string;
  @HostBinding('style.color') textHoverColor: string;

  @HostListener('mouseenter') onMouseHover() {
    this.backgroundHoverColor = '#f1f1f1';
    this.textHoverColor = '#4d4d44'
  }

  @HostListener('mouseleave') offMouseHover() {
    this.backgroundHoverColor = '#4d4d44';
    this.textHoverColor = '#f1f1f1';
  }

  constructor() { }

}
