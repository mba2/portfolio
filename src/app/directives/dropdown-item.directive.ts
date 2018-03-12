import { Directive, HostListener, HostBinding, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDropdownItem]'
})
export class DropdownItemDirective {
  private isOpened = false;
  private parent = this.renderer.parentNode(this.ref.nativeElement);


  constructor(private ref: ElementRef, private renderer: Renderer2) {
   }

  @HostListener('click') onClick() {
    if(this.isOpened) {
      this.renderer.removeClass(this.parent, 'is-active');
    } else {
      this.renderer.addClass(this.parent, 'is-active');
    }
    this.isOpened = !this.isOpened;
  }
}
