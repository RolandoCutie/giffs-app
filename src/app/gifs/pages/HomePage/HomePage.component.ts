import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gifs.interface';

@Component({
  selector: 'gifs-homepage',
  templateUrl: './HomePage.component.html',
  styleUrls: [],
})
export class HomePageComponent implements OnInit {
  constructor(private gifsService: GifsService) {}

  get gifs(): Gif[] {
    return this.gifsService.gifList;
  }

  ngOnInit() {}
}
