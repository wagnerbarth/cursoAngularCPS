import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProdutosService } from 'src/app/services/produtos.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {

  fileData: any = '';

  constructor(
    private produtosService: ProdutosService,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
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
        // console.log('erro imagem: ', err)
        this.produtosService.exibirMensagem(
          'SISTEMA',
          `Imagem não foi adicionada!`,
          'toast-error'
        );
      });
  }


}
