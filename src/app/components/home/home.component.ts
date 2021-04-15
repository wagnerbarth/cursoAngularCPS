import { IProduto } from './../../model/iProduto.model';
import { ProdutosService } from './../../services/produtos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // Array de produtos
  /*cardProdutos: any[] = [
    {
      id: 1,
      nome: 'Curso de Angular',
      preco: 49.99,
      validade: '2021-12-04',
      promocao: true,
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

  cardProdutos: IProduto[] = [];

  constructor(
    private produtosService: ProdutosService
  ) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    this.carregarProdutos();
  }

  carregarProdutos(): void {
    this.produtosService.buscarTodos()
      // tslint:disable-next-line: deprecation
      .subscribe((retorno) => {
        // console.log('lista:', retorno);
        this.cardProdutos = retorno;
      });
  }

}
