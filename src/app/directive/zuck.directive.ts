import { Directive, ElementRef, AfterViewInit, ViewChild } from '@angular/core'
declare var Zuck: any

@Directive({
  selector: '[appZuck]',
  standalone: true,
})
export class ZuckDirective implements AfterViewInit {
  @ViewChild('zuckStories') zuckStoriesElement: ElementRef | undefined

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    if (this.zuckStoriesElement) {
      const stories = new Zuck(this.zuckStoriesElement.nativeElement.id, {})
    }
  }
}
