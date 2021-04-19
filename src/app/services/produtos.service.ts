import { environment } from './../../environments/environment.prod';
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

  // private URL: string = 'http://localhost:3000/produtos';
  private URL: string = environment.URL;

  constructor(
    private http: HttpClient,
    private toastr: ToastrService
  ) { }

  buscarTodos(): Observable<IProduto[]> {
    return this.http.get<IProduto[]>(this.URL).pipe(
      map((retorno) => retorno), // caso não receba o retorno exibe o erro
      catchError((erro) => this.exibirErro(erro))
    );
  }

  cadastrar(produto: IProduto): Observable<IProduto> {
    return this.http.post<IProduto>(this.URL, produto).pipe(
      map((retorno) => retorno), // caso não receba o retorno exibe o erro
      catchError((erro) => this.exibirErro(erro))
    );
  }

  excluir(id: number): Observable<any> {
    return this.http.delete<any>(`${this.URL}/${id}`).pipe(
      map((retorno) => retorno), // caso não receba o retorno exibe o erro
      catchError((erro) => this.exibirErro(erro))
    );
  }

  buscarPorId(id: number): Observable<IProduto> {
    return this.http.get<IProduto>(`${this.URL}/${id}`).pipe(
      map((retorno) => retorno), // caso não receba o retorno exibe o erro
      catchError((erro) => this.exibirErro(erro))
    );
  }

  atualizar(produto: IProduto): Observable<IProduto> {
    return this.http.put<IProduto>(`${this.URL}/${produto.id}`, produto).pipe(
      map((retorno) => retorno), // caso não receba o retorno exibe o erro
      catchError((erro) => this.exibirErro(erro))
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
