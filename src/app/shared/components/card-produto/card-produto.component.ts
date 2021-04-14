import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-produto',
  templateUrl: './card-produto.component.html',
  styleUrls: ['./card-produto.component.css']
})
export class CardProdutoComponent implements OnInit {

  @Input() foto: string;
  @Input() nomeProduto: string;
  @Input() idProduto: number;
  @Input() promocao: boolean;
  @Input() precoProduto: number;
  @Input() dataValidade: number;

  constructor() { }

  ngOnInit(): void {
  }

}