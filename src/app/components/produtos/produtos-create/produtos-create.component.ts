import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produtos-create',
  templateUrl: './produtos-create.component.html',
  styleUrls: ['./produtos-create.component.css']
})
export class ProdutosCreateComponent implements OnInit {

  nome: string;
  preco: number;
  validade: string;

  constructor() { }

  ngOnInit(): void {
  }

  salvarProduto(): void {
    console.log('Nome: ', this.nome);
    console.log('Preço: ', this.preco);
    console.log('Validade: ', this.validade);
    alert('Produto salvo com sucesso!');
  }

}
