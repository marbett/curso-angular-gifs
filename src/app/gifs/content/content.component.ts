import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {

  get results () {
    return this.gifsService.results;
  }

  constructor (private gifsService: GifsService) {

  }

  

}
