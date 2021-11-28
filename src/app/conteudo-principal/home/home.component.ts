import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/-model/produtos';
import { PersistenceService } from 'src/app/persistence.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  caixaDeSom: Produto = new Produto(1,"caixa-de-som","tecnologia","Este produto ... sahuhsau hasusahu sahuashu ahsaushhashas uhsa", "/assets/img/tecnologia/caixa-de-som.png",150.00)
  celular: Produto = new Produto(2,"celular","tecnologia","Este produto ... sahuhsauha susahusahuashu ahsaushha shasuhsa", "/assets/img/tecnologia/celular.png",3150.00)
  computador: Produto = new Produto(3,"computador","tecnologia","Este produto ... sahu hsauhasusa husahuashua hsaushhash asuhsa", "/assets/img/tecnologia/computador.png",4250.00)
  headphone: Produto = new Produto(4,"headphone","tecnologia","Este produto ... sah uhsauhasu sahusahuashuah saushhasha suhsa", "/assets/img/tecnologia/headphone.png",80.00)
  notebook: Produto = new Produto(5,"notebook","tecnologia","Este produto ... sahuhsauh asusahusahuash uahs aushhashas uhsa", "/assets/img/tecnologia/notebook.png",3350.00)
  tv: Produto = new Produto(6,"tv","tecnologia","Este produto ... sah uhsauhasusa husahuas hua hsa ushhasha suhsa", "/assets/img/tecnologia/tv.png",2750.00)
  


  arrayProdutos = [this.caixaDeSom,this.celular,this.computador,this.headphone,this.notebook,this.tv]



  
  produto: any;
  listaProFilho: any[] = []

  constructor(private PersistenceService:PersistenceService) { }

  ngOnInit(): void {
    this.PersistenceService.addLista("produtos do shopping",this.arrayProdutos)
    let numeroAleatorio = Math.floor(Math.random()*this.arrayProdutos.length)
    let produtoSelecionado = this.arrayProdutos.find(p => p.id == numeroAleatorio)
    this.produto = produtoSelecionado
    this.listaProFilho.push(this.produto)
  }

}
