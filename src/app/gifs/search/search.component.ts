import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  @ViewChild('txtSearch') txtBuscar!: ElementRef<HTMLInputElement>;

  search () : void {
    const value = this.txtBuscar.nativeElement.value;
    console.log(value);
    this.txtBuscar.nativeElement.value = "";
  }

}
