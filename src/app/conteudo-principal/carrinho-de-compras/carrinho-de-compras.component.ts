import { PersistenceService } from 'src/app/persistence.service';
import { Produto } from 'src/app/-model/produtos';
import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-carrinho-de-compras',
  templateUrl: './carrinho-de-compras.component.html',
  styleUrls: ['./carrinho-de-compras.component.css']
})
export class CarrinhoDeComprasComponent implements OnInit,DoCheck{

  produtosSelecionados: Produto[] = []
  valorDosProdutos: number[] = []

  temProduto:boolean = false
  concluido:boolean = false
  

  valorTotal: number = 0

  remover(id: number){
    console.log("funciona")
    this.PersistenceService.removerProdto(id)
  }

  enviar(){
   this.concluido = true
  }

  constructor(private PersistenceService: PersistenceService) { }
  ngDoCheck(): void {
    this.PersistenceService.loadLogin()
    this.temProduto = false
    this.produtosSelecionados = this.PersistenceService.loadLista("produtos selecionados")
    if(this.produtosSelecionados.length != 0){
      this.valorDosProdutos = this.produtosSelecionados.map(p => p.valor)
      this.valorTotal = this.valorDosProdutos.reduce((acc, cur) => acc + cur)
      this.temProduto = true
    }


  }


  ngOnInit(): void {
    this.PersistenceService.loadLogin()
    this.temProduto = false
    this.produtosSelecionados = this.PersistenceService.loadLista("produtos selecionados")
    if(this.produtosSelecionados.length != 0){
      this.valorDosProdutos = this.produtosSelecionados.map(p => p.valor)
      this.valorTotal = this.valorDosProdutos.reduce((acc, cur) => acc + cur)
      this.temProduto = true
    }
    
    
  }

  

}
