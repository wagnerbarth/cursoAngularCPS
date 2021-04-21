import { environment } from './../../../../environments/environment';
import { ProdutosService } from './../../../services/produtos.service';
import { IProduto } from './../../../model/iProduto.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-produtos-create',
  templateUrl: './produtos-create.component.html',
  styleUrls: ['./produtos-create.component.css']
})
export class ProdutosCreateComponent implements OnInit {

  /*nome: string;
  preco: number;
  validade: string;*/

  selected = true;
  fileData: any = '';
  listaFotos: any;

  produto: IProduto = {
    nome: null,
    validade: null,
    preco: null,
    promocao: null,
    foto: null
  };

  constructor(
    private produtosService: ProdutosService,
    private router: Router,
    private http: HttpClient
  ) { this.produto.promocao = '0'; }

  ngOnInit(): void {
    this.carregarFotos();
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

    const URL = environment.uploadURL;

    this.http.post(URL + 'upload_file_angular.php', this.fileData)
      .subscribe(res => {
        this.produtosService.exibirMensagem(
          'SISTEMA',
          `Imagem foi adicionada com sucesso!`,
          'toast-success'
        );
      }, (err) => {
        console.log('erro imagem: ', err)
        this.produtosService.exibirMensagem(
          'SISTEMA',
          `Imagem não foi adicionada!`,
          'toast-error'
        );
      });
  }

}
