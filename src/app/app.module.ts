import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { CarouselComponent } from './cabecalho/carousel/carousel.component';
import { NavbarComponent } from './cabecalho/navbar/navbar.component';
import { RodapeComponent } from './rodape/rodape.component';
import { ConteudoPrincipalComponent } from './conteudo-principal/conteudo-principal.component';
import { ProdutosComponent } from './conteudo-principal/produtos/produtos.component';
import { BlocoProdutoComponent } from './conteudo-principal/produtos/bloco-produto/bloco-produto.component';
import { FormularioCadastroComponent } from './conteudo-principal/formulario-cadastro/formulario-cadastro.component';
import { DetalheDoProdutoComponent } from './conteudo-principal/produtos/detalhe-do-produto/detalhe-do-produto.component';
import { HomeComponent } from './conteudo-principal/home/home.component';
import { CarrinhoDeComprasComponent } from './conteudo-principal/carrinho-de-compras/carrinho-de-compras.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
import { LoginComponent } from './cabecalho/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    CarouselComponent,
    NavbarComponent,
    RodapeComponent,
    ConteudoPrincipalComponent,
    ProdutosComponent,
    BlocoProdutoComponent,
    FormularioCadastroComponent,
    DetalheDoProdutoComponent,
    HomeComponent,
    CarrinhoDeComprasComponent,
    PaginaNaoEncontradaComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
