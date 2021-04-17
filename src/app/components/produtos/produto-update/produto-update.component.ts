import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduto } from 'src/app/model/iProduto.model';
import { ProdutosService } from 'src/app/services/produtos.service';


@Component({
  selector: 'app-produto-update',
  templateUrl: './produto-update.component.html',
  styleUrls: ['./produto-update.component.css']
})

export class ProdutoUpdateComponent implements OnInit {

  foto: "elaia";

  produto: IProduto = {
    nome: null,
    validade: null,
    preco: null,
    promocao: null,
    foto: 'assets/images/produtos/angular.png'
  };

  constructor(
    private produtosService: ProdutosService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.produtosService.buscarPorId(id)
      // tslint:disable-next-line: deprecation
      .subscribe((retorno) => this.produto = retorno);
  }

  atualizarProduto(): void {
    this.produtosService.atualizar(this.produto)
      // tslint:disable-next-line: deprecation
      .subscribe((retorno) => {
        this.produto = retorno;
        this.produtosService.exibirMensagem(
          'SISTEMA',
          `${this.produto.nome} foi atualizado com sucesso.`,
          'toast-success'
        );
        this.router.navigate(['/produtos']);
      });
  }

}
