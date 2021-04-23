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

  selected = true;
  listaFotos: any;

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
    this.carregarFotos();

    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));

    this.produtosService.buscarPorId(id)
      // tslint:disable-next-line: deprecation
      .subscribe((retorno) => {
        this.produto = retorno;
        // console.log(this.produto);
      });
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

  carregarFotos(): void {
    this.produtosService.buscarFotos()
      // tslint:disable-next-line: deprecation
      .subscribe((retorno) => {
        // console.log('lista:', retorno);
        this.listaFotos = retorno;
        // console.log('Fotos: ', this.listaFotos);
      });
  }

}
