import { Directive, Input, HostListener, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSort]'
})
export class SortDirective {

  // Get field name from component
  @Input() fieldName: string;
  @Input() sortFlag: boolean;

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  @HostListener('click') onclick() {
    this.sort();
  }

  private sort() {
    console.log(this.fieldName);
    if (this.sortFlag) {
      this.element.nativeElement.innerHTML = `${this.fieldName} <span class="glyphicon glyphicon-download"></span>`;
    } else {
      this.element.nativeElement.innerHTML = `${this.fieldName} <span class="glyphicon glyphicon-upload"></span>`;
    }
  }
}
