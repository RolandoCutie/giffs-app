import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazyImage.component.html',
})
export class LazyImageComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    if (!this.url) throw new Error('URL must be provided');
  }

  onLoad() {
    console.log('Loading image');

    setTimeout(() => {
      this.hasLoaded = true;
    }, 1000);
  }

  public hasLoaded: boolean = false;

  @Input()
  public url!: string;
  @Input()
  public alt!: string;
}
