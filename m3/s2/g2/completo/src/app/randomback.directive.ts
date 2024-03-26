import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appRandomBackgroundColor]'
})
export class RandomBackgroundColorDirective implements OnInit {

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    this.elementRef.nativeElement.style.backgroundColor = randomColor;
  }
}
