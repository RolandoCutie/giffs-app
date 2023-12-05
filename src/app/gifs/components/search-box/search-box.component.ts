import { GifsService } from './../../services/gifs.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css'],
})
export class SearchBoxComponent implements OnInit {
  constructor(private gifsService: GifsService) {}

  ngOnInit() {}

  //Selector ViewChild para el componente en el html
  @ViewChild('txtTagImput')
  public tagImput!: ElementRef<HTMLInputElement>;

  searchTag() {
   
    const newTag = this.tagImput.nativeElement.value;
    this.gifsService.searchTag(newTag);

    this.tagImput.nativeElement.value = '';
  }
}
