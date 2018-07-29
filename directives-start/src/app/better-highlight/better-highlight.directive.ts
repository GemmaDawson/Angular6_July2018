import {
  Directive,
  Renderer2,
  OnInit,
  ElementRef,
  HostListener
} from "@angular/core";

@Directive({
  selector: "[appBetterHighlight]"
})
export class BetterHighlightDirective implements OnInit {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   "background-color",
    //   "blue"
    // );
  }

  @HostListener("mouseenter")
  mouserover(eventData: Event) {
    this.renderer.setStyle(
      this.elRef.nativeElement,
      "background-color",
      "blue"
    );
  }

  @HostListener("mouseleave")
  mouserleave(eventData: Event) {
    this.renderer.setStyle(
      this.elRef.nativeElement,
      "background-color",
      "transparent"
    );
  }
}
