//import { IProduto } from 'src/app/model/iProduto.model';
import { IProduto } from './../../../model/iProduto.model';
import { ProdutosService } from './../../../services/produtos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produtos-list',
  templateUrl: './produtos-list.component.html',
  styleUrls: ['./produtos-list.component.css']
})
export class ProdutosListComponent implements OnInit {

  // Array do tipo genérico "any"
  /* listaProdutos: any[] = [
     {nome: 'Curso de Angular', preco: 50, validade: '2021-09-23', id: 1},
     {nome: 'Curso de Ionic', preco: 80, validade: '2021-09-23', id: 2, promocao: true},
     {nome: 'Curso de C#', preco: 50, validade: '2021-09-23', id: 3}
   ];*/

  // Array de produtos antigo
  /*listaProdutos: any[] = [
    {
      id: 1,
      nome: 'Curso de Angular',
      preco: 49.99,
      validade: '2021-12-04',
      promocao: false,
      foto: 'assets/images/produtos/angular.png'
    },
    {
      id: 2,
      nome: 'Curso de Ionic',
      preco: 79.99,
      validade: '2021-11-04',
      promocao: false,
      foto: 'assets/images/produtos/ionic.jfif'
    },
    {
      id: 3,
      nome: 'Curso de C#',
      preco: 49.99,
      validade: '2021-11-25',
      promocao: true,
      foto: 'assets/images/produtos/cSharp.jfif'
    },
    {
      id: 4,
      nome: 'Curso de React',
      preco: 79.99,
      validade: '2021-10-12',
      promocao: false,
      foto: 'assets/images/produtos/react.png'
    },
    {
      id: 5,
      nome: 'Curso de React Native',
      preco: 49.99,
      validade: '2021-12-01',
      promocao: true,
      foto: 'assets/images/produtos/reactNative.jpg'
    },
    {
      id: 6,
      nome: 'Curso de Java',
      preco: 99.99,
      validade: '2021-12-01',
      promocao: true,
      foto: 'assets/images/produtos/java.jpg'
    },
  ];
  */

  listaProdutos: IProduto[] = [];

  constructor(
    private produtosService: ProdutosService
  ) { }

  ngOnInit(): void {
    this.carregarProdutos();
  }

  carregarProdutos(): void {
    this.produtosService.buscarTodos()
      // tslint:disable-next-line: deprecation
      .subscribe((retorno) => {
        // console.log('lista:', retorno);
        this.listaProdutos = retorno;
      });
  }

  deletar(produto: IProduto): void{
    this.produtosService.excluir(produto.id)
    .subscribe(()=>{
      this.produtosService.exibirMensagem(
        'SISTEMA',
        `${produto.nome} foi excluido com sucesso!`,
        'toast-success'
      );
      this.carregarProdutos();
    });
  }

}
