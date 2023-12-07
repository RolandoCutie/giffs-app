import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interface';

@Component({
  selector: 'gifs-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css'],
})
export class CardListComponent implements OnInit {
  ngOnInit() {}

  @Input()
  public gifs: Gif[] = [];
}
