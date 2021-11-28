import { PersistenceService } from './../../persistence.service';
import { FichaCadastro } from './../../-model/ficha-cadastro';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';


@Component({
  selector: 'app-formulario-cadastro',
  templateUrl: './formulario-cadastro.component.html',
  styleUrls: ['./formulario-cadastro.component.css']
})
export class FormularioCadastroComponent implements OnInit {

  fichaDeCadastro: FichaCadastro = new FichaCadastro("","","","","","","","","","")

  cadastrar: FormGroup;
  controleEmail: string[] = ["@","."]
  
  mesnsagemErro: boolean = false
  mesnsagemEnvio: boolean = false
  

  validarCaractere = function conterIcones (listaDeIcones: string[]) : ValidatorFn{
    return (controle: AbstractControl): ValidationErrors | null => {
      const contem = listaDeIcones.some(i => !controle.value.includes(i))
      return contem ? {icone: controle.value} : null
    }
  }
  
  
  constructor(private PersistenceService: PersistenceService) { 
    this.cadastrar = new FormGroup({
      "nome": new FormControl(this.fichaDeCadastro.nome,[Validators.required,Validators.minLength(3)]),
      "sobrenome": new FormControl(this.fichaDeCadastro.sobrenome),
      "genero": new FormControl(this.fichaDeCadastro.sobrenome),
      "email": new FormControl(this.fichaDeCadastro.emailLogin,[Validators.required, this.validarCaractere(this.controleEmail)]),
      "telefone": new FormControl(this.fichaDeCadastro.telefone),
      "rua": new FormControl(this.fichaDeCadastro.rua,[Validators.required]),
      "numero": new FormControl(this.fichaDeCadastro.numero,[Validators.required]),
      "cidade": new FormControl(this.fichaDeCadastro.cidade,[Validators.required]),
      "estado": new FormControl(this.fichaDeCadastro.estado),
      "senha": new FormControl(this.fichaDeCadastro.senha,[Validators.required,Validators.minLength(6)]),
      // "confirmar-senha": new FormControl(null)
    })
  }

  get nome(){return this.cadastrar.get("nome")}
  get email(){return this.cadastrar.get("email")}
  get senha(){return this.cadastrar.get("senha")}


  ngOnInit(): void {
    
  }

  enviar(){


    const nome = this.cadastrar.get("nome")?.value
    const sobrenome = this.cadastrar.get("sobrenome")?.value
    const email = this.cadastrar.get("email")?.value
    const telefone = this.cadastrar.get("telefone")?.value
    const rua = this.cadastrar.get("rua")?.value
    const numero = this.cadastrar.get("numero")?.value
    const cidade = this.cadastrar.get("cidade")?.value
    const estado = this.cadastrar.get("estado")?.value
    const senha = this.cadastrar.get("senha")?.value
    const genero = this.cadastrar.get("genero")?.value
    const novoUsuario = new FichaCadastro(nome,email,rua,numero,cidade,estado,senha,sobrenome,genero,telefone)
    
    let listaClientes: any[] = []
    listaClientes = this.PersistenceService.loadclientes("usuarios salvos")
    if(listaClientes.some(c => c.emailLogin == novoUsuario.emailLogin)){
      this.mesnsagemErro = true
      this.mesnsagemEnvio = false
    } else{
      this.mesnsagemErro = false
      this.mesnsagemEnvio = true
      this.PersistenceService.addUsuário(novoUsuario)
    }


    

  }

  

}
