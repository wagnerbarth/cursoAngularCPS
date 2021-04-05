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
  idProduto: number = 123;
  precoProduto: number = 9.23;
  promocao: boolean = false;

  // link da imagem
  fotoProduto1: string = 'assets/images/crud.png';

  constructor() { }

  ngOnInit(): void { }

}
