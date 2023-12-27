import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interface';

@Component({
  selector: 'card-gifs',
  templateUrl: './card-gifs.component.html',
  styleUrls: ['./card-gifs.component.css'],
})
export class CardGifsComponent implements OnInit {
  constructor() {}

  ngOnInit():void {
    if(!this.gif) throw new Error("Gif Property is Requered");
  }

  @Input()
  public gif!: Gif;
}
