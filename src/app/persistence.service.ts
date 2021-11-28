import { FichaCadastro } from './-model/ficha-cadastro';
import { Produto } from 'src/app/-model/produtos';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PersistenceService {

  constructor() { }

  addLista(nome:string, lista: Produto[] | FichaCadastro[]){
    localStorage.setItem(nome, JSON.stringify(lista))
  }

  loadLista(nome: string): Produto[] {
    return JSON.parse(localStorage.getItem(nome) ?? "[]");
  }


  addProduto(produto:Produto){
    let lista:Produto[] = [] 
    let salvo = JSON.parse(localStorage.getItem("produtos selecionados") ?? "[]");
    lista = salvo.filter((p: Produto) => p != produto)
    lista.push(produto)
    localStorage.setItem("produtos selecionados", JSON.stringify(lista));
  }

  removerProdto(id: number){
    let lista:Produto[] = [] 
    let salvo = JSON.parse(localStorage.getItem("produtos selecionados") ?? "[]");
    lista = salvo
    let novaLista = lista.filter(p => p.id != id)
    this.addLista("produtos selecionados",novaLista)
  }

  addUsuário(usuario:FichaCadastro){
    let lista:FichaCadastro[] = [] 
    let salvo = JSON.parse(localStorage.getItem("usuarios salvos") ?? "[]");
    lista = salvo.filter((u: FichaCadastro) => u != usuario)
    lista.push(usuario)
    localStorage.setItem("usuarios salvos", JSON.stringify(lista));
  }

  loadclientes(nome: string): FichaCadastro[]{
    return JSON.parse(localStorage.getItem(nome) ?? "[]");
  }

  addLogin(usuario:FichaCadastro){
    localStorage.setItem("usuario logado", JSON.stringify(usuario));
  }

  loadLogin(): FichaCadastro[]{
    return JSON.parse(localStorage.getItem("usuario logado") ?? "[]");
  }

  deletarLogin(){
    localStorage.removeItem("usuario logado")
  }


}