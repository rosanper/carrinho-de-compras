import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { CarrinhoDeComprasComponent } from './conteudo-principal/carrinho-de-compras/carrinho-de-compras.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormularioCadastroComponent } from './conteudo-principal/formulario-cadastro/formulario-cadastro.component';
import { HomeComponent } from './conteudo-principal/home/home.component';
import { DetalheDoProdutoComponent } from './conteudo-principal/produtos/detalhe-do-produto/detalhe-do-produto.component';
import { ProdutosComponent } from './conteudo-principal/produtos/produtos.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'produtos', component: ProdutosComponent},
  {path: 'cadastro', component: FormularioCadastroComponent},
  {path: 'produtos/:id/:nome', component: DetalheDoProdutoComponent},
  {path: 'carrinho', component: CarrinhoDeComprasComponent},
  {path: 'nao-encontrada', component: PaginaNaoEncontradaComponent},
  {path: '**', redirectTo: 'nao-encontrada'}

 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
