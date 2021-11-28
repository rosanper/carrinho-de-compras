import { PersistenceService } from 'src/app/persistence.service';
import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/-model/produtos';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhe-do-produto',
  templateUrl: './detalhe-do-produto.component.html',
  styleUrls: ['./detalhe-do-produto.component.css']
})
export class DetalheDoProdutoComponent implements OnInit {

  listaDeProdutos: Produto[] = []
  produto: any;

  // produtoSelecionado: Produto = new Produto(0,"","","","",0);

  constructor(private PersistenceService:PersistenceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.listaDeProdutos = this.PersistenceService.loadLista("produtos do shopping")
    let idProduto = this.route.snapshot.params['id']
    let produtoSelecionado = this.listaDeProdutos.find(p => p.id == idProduto )
    this.produto = produtoSelecionado
  }

}
