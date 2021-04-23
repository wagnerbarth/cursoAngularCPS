import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ProdutosListComponent } from './components/produtos/produtos-list/produtos-list.component';
import { ProdutoUpdateComponent } from './components/produtos/produto-update/produto-update.component';
import { ProdutosCreateComponent } from './components/produtos/produtos-create/produtos-create.component';
import { UploadImageComponent } from './components/produtos/upload-image/upload-image.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'produtos', component: ProdutosListComponent },
  { path: 'produtos/cadastrar', component: ProdutosCreateComponent },
  { path: 'produto/atualizar/:id', component: ProdutoUpdateComponent },
  { path: 'upload', component: UploadImageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
