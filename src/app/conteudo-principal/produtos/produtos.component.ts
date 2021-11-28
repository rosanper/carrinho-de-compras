import { PersistenceService } from './../../persistence.service';
import { Produto } from './../../-model/produtos';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  
  listaDeProdutos: Produto[] = []

  constructor(private PersistenceService: PersistenceService) { }

  ngOnInit(): void {
    this.listaDeProdutos = this.PersistenceService.loadLista("produtos do shopping")
    
  }

}
