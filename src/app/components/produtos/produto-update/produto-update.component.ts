import { HttpClient } from '@angular/common/http';
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

  foto: '';
  fileData: any = '';
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
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('id'));

    this.produtosService.buscarPorId(id)
      // tslint:disable-next-line: deprecation
      .subscribe((retorno) => {
        this.produto = retorno;
        // console.log(this.produto);
      });

    this.carregarFotos();
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
      });
  }

  fileChange(event: any): void {

    const fileList: FileList = event.target.files;
    // verifica se o arquivo foi selecionado
    if (fileList.length > 0) {

      const file = fileList[0];
      // pega informações do arquivo
      // console.log('finfo', file.name, file.size, file.type);
      // testa se o tamanho do arquivo não supera 4K
      if ((file.size / 1048576) <= 4) {
        const formData = new FormData();
        formData.append('file', file, file.name);
        this.fileData = formData; // carrega imagem do tipo formData

      } else {
        this.produtosService.exibirMensagem(
          'SISTEMA',
          `Tamanho da imagem maior que 4K!`,
          'toast-error'
        );
      }

    }
  }

  uploadFile(): void {

    const URL = 'http://localhost/upload-imagens/';

    this.http.post(URL + 'upload_file_angular.php', this.fileData)
      .subscribe(res => {
        this.produtosService.exibirMensagem(
          'SISTEMA',
          `Imagem foi adicionada com sucesso!`,
          'toast-success'
        );
      }, (err) => {
        this.produtosService.exibirMensagem(
          'SISTEMA',
          `Imagem não foi adicionada!`,
          'toast-error'
        );
      });
  }

}
