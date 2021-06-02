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

  buscarGifs (query: string) {
    this._history.unshift(query);
    console.log(this._history);
  }

}
