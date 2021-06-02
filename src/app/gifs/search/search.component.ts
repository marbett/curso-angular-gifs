import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  @ViewChild('txtSearch') txtBuscar!: ElementRef<HTMLInputElement>;

  constructor (private gifsService: GifsService) {

  }

  search () : void {    
    const query = this.txtBuscar.nativeElement.value;

    if (query.trim().length > 0) {
      this.gifsService.searchGifs(query);
      this.txtBuscar.nativeElement.value = "";
    }

    
  }

}
