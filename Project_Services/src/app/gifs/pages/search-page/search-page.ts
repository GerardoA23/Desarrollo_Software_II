import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GifList } from '../../components/gif-list/gif-list';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-search-page',
  imports: [FormsModule, GifList],
  templateUrl: './search-page.html',
  styles: ``
})
export default class SearchPage {
  gifService = inject(GifsService);
  query = '';
  hasSearched = false;

  onSubmit() {
    if (!this.query.trim()) {
      this.hasSearched = false;
      this.gifService.searchGifs('');
      return;
    }
    this.hasSearched = true;
    this.gifService.searchGifs(this.query);
  }
}
