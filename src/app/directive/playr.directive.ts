import { Directive, ElementRef, Input, OnInit } from '@angular/core'
import Plyr from 'plyr'

@Directive({
  selector: '[appPlyr]',
  standalone: true,
})
export class PlyrDirective implements OnInit {
  player!: Plyr

  @Input() options!: Plyr.Options

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.player = new Plyr(this.elementRef.nativeElement, this.options)
  }
}
