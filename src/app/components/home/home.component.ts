import { IProduto } from './../../model/iProduto.model';
import { ProdutosService } from './../../services/produtos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cardProdutos: IProduto[] = [];

  constructor(
    private produtosService: ProdutosService,
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
