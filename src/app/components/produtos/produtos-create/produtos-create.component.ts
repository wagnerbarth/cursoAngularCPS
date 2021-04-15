import { ProdutosService } from './../../../services/produtos.service';
import { IProduto } from './../../../model/iProduto.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produtos-create',
  templateUrl: './produtos-create.component.html',
  styleUrls: ['./produtos-create.component.css']
})
export class ProdutosCreateComponent implements OnInit {

  /*nome: string;
  preco: number;
  validade: string;*/

  produto: IProduto = {
    nome: null,
    validade: null,
    preco: null,
    promocao: null,
    foto: null
  };

  constructor(
    private produtosService: ProdutosService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  salvarProduto(): void {
    this.produtosService.cadastrar(this.produto)
      // tslint:disable-next-line: deprecation
      .subscribe((retorno) => {
        this.produto = retorno;
        this.produtosService.exibirMensagem(
          'SISTEMA',
          `${this.produto.nome} foi cadastrado com sucesso. ID: ${this.produto.id}`,
          'toast-success'
        );
        this.router.navigate(['/produtos']);
      });
  }

}
