import { Injectable } from '@angular/core';

//provide in root me evita tener que importar en los providers, lo eleva al nivel del root
@Injectable({
  providedIn: 'root'
})
export class GifsService {

  constructor() { }

  private _history: string [] = [];

  get history () {
      return [...this._history];
  }

  searchGifs (query: string = '') {
    query = query.toLowerCase();
    
    if (!this._history.includes(query)) {
      this._history.unshift(query);
      this._history = this._history.splice(0, 10);
    }
    console.log(this._history);
  }

}
