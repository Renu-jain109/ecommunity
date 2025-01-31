import { AfterViewInit, DestroyRef, Directive, ElementRef, HostListener, inject } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appAlphabetdirective]',
  standalone: true
})
export class AlphabetdirectiveDirective {

  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event'])
  onInputChange(event: any) {
    let inputValue = this.el.nativeElement.value;

    // Remove non-alphabetic characters (except spaces)
    inputValue = inputValue.replace(/[^A-Za-z\s]/g, '');

    // Update the input field value
    this.el.nativeElement.value = inputValue;

  };
}