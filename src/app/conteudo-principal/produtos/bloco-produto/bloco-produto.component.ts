import { Produto } from './../../../-model/produtos';
import { Component, Input, OnInit } from '@angular/core';
import { PersistenceService } from 'src/app/persistence.service';

@Component({
  selector: 'app-bloco-produto',
  templateUrl: './bloco-produto.component.html',
  styleUrls: ['./bloco-produto.component.css']
})
export class BlocoProdutoComponent implements OnInit {

  @Input() listaProdutos: Produto[] = []

  constructor(private persistence: PersistenceService) { }

  add(nome: string):void{
    let produtoSelecionado: Produto | undefined = this.listaProdutos.find(p=>p.nome === nome)
    if(produtoSelecionado){
      this.persistence.addProduto(produtoSelecionado)
    }
  }

  ngOnInit(): void {
  }

}
