import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { CardGifsComponent } from './components/card-gifs/card-gifs.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { HomePageComponent } from './pages/HomePage/HomePage.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';


@NgModule({
  declarations: [
    HomePageComponent,
    SearchBoxComponent,
    CardListComponent,
    CardGifsComponent,
  ],
  imports: [CommonModule,SharedModule],
  exports: [
    HomePageComponent,
    SearchBoxComponent,
    CardListComponent,
    CardGifsComponent,
  ],
})
export class GifsModule {}
