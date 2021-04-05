import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nomeProduto: string = 'Curso de Angular';
  // utilizar template string
  anuncio: string = `O ${this.nomeProduto} esta em promoção!`;

  constructor() { }

  ngOnInit(): void {
  }

}
