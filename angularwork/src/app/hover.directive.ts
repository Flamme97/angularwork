import { DOCUMENT } from '@angular/common';
import {
  Directive,
  ElementRef,
  HostListener,
  Inject,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appHover]',
})
export class HoverDirective implements OnInit {
  // can take the selector name to insert instead of giving the value to a name.  - "@input() color: sting = 'red"
  @Input() appHover: string = 'red';

  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
  ) {}

  ngOnInit(): void {
    // this.element.nativeElement.style.backgroundColor = this.appHover;
    this.renderer.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      this.appHover,
    );
  }

  @HostListener('mouseenter') onMouseEnter() {
    // this.element.nativeElement.style.backgroundColor = this.appHover;
    this.renderer.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      'green',
    );
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.renderer.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      'white',
  )}
}
// hostlistener listen to anything on the event.
