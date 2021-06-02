import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse, Gif } from '../interfaces/gifs.interface';

//provide in root me evita tener que importar en los providers, lo eleva al nivel del root
@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _history: string [] = [];
  private _apiKey: string = 'fGN7RRKQBvzVIUTSR0KGAG07HKeKIau5';
  private _limit: number = 10;
  public results: Gif[] = [];

  get history () {
      return [...this._history];
  }

  constructor(private httpClient: HttpClient) { 
    
    this._history = JSON.parse(localStorage.getItem("history")!) ||[];
    
    

  }

  searchGifs (query: string = '') {
    query = query.toLowerCase();
    
    if (!this._history.includes(query)) {
      this._history.unshift(query);
      this._history = this._history.splice(0, 10);
      localStorage.setItem("history", JSON.stringify(this._history));
    }
    console.log(this._history);
    
    //esta peticion es observable
    this.httpClient.get<SearchGifsResponse>(`https://api.giphy.com/v1/gifs/search?api_key=${this._apiKey}&q=${query}&limit=${this._limit}`)
    .subscribe(
      (resp: SearchGifsResponse) => {
        console.log(resp.data);
        this.results = resp.data;
      }
    );
  }


  /*
  async searchGifs (query: string = '') {
    query = query.toLowerCase();
    
    if (!this._history.includes(query)) {
      this._history.unshift(query);
      this._history = this._history.splice(0, 10);
    }
    console.log(this._history);

    const resp = await fetch('https://api.giphy.com/v1/gifs/search?api_key=fGN7RRKQBvzVIUTSR0KGAG07HKeKIau5&q=gato&limit=10');
    const data = await resp.json();
    console.log(data);


  }
  */

}
