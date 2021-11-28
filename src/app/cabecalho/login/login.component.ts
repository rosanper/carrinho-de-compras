import { FichaCadastro } from './../../-model/ficha-cadastro';
import { PersistenceService } from 'src/app/persistence.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private PersistenceService: PersistenceService) { }

  email: string = ""
  senha: string = ""
  listaDeEmails: FichaCadastro[] = []
  cliente: any;
  estado: boolean = false
  erro: boolean = false
  

  verificar(email: string, senha:string){
    console.log(email)
    console.log(senha)
    this.listaDeEmails = this.PersistenceService.loadclientes("usuarios salvos")
    console.log(this.listaDeEmails)
    if(this.listaDeEmails.some(c => c.emailLogin = email)){
      this.cliente = this.listaDeEmails.find(c => c.emailLogin == email)
      console.log(this.cliente)
      if(this.cliente.senha == senha){
        this.erro = false
        this.estado = true
        this.PersistenceService.addLogin(this.cliente)
      }
    }else{
        this.erro = true
    }
  }

  deslogar(){
    this.estado = false
    this.PersistenceService.deletarLogin()
  }

  ngOnInit(): void {
    let loginSalvo = this.PersistenceService.loadLogin()
    if(loginSalvo.length != 0){
      this.estado = true
    }else{
      this.estado = false
    }
  }

}
