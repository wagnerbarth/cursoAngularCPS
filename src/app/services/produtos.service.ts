import { ToastrService } from 'ngx-toastr';
import { IProduto } from './../model/iProduto.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  private URL: string = 'http://localhost:3000/produtos';

  constructor(
    private http: HttpClient,
    private toastr: ToastrService
  ) { }

  buscarTodos(): Observable<IProduto[]> {
    return this.http.get<IProduto[]>(this.URL).pipe(
      map((retorno) => { return retorno }), // caso não receba o retorno exibe o erro
      catchError((erro) => { return this.exibirErro(erro); })
    );
  }

  exibirErro(e: any): Observable<any> {
    this.exibirMensagem('ERRO!!!', 'Não foi possível realizar a operação!', 'toast-error');
    return EMPTY;
  }

  exibirMensagem(titulo: string, mensagem: string, tipo: string): void {
    this.toastr.show(titulo, mensagem, { closeButton: true, progressBar: true }, tipo);
  }
}
