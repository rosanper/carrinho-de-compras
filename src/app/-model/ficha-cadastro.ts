export class FichaCadastro{
    nome: string = ""
    sobrenome: string = ""
    genero: string = ""
    emailLogin: string = ""
    telefone: string = ""
    rua: string = ""
    numero: string = ""
    cidade: string = ""
    estado: string = ""
    senha: string = ""
    
    constructor(nome: string, emailLogin:string, rua: string, numero: string, cidade: string, estado: string, senha: string, sobrenome: string,  genero: string, telefone: string ){

            
            this.emailLogin = emailLogin
            
            this.rua = rua
            this.numero = numero
            this.nome = nome
            this.cidade = cidade
            this.estado = estado
            this.senha = senha
            this.sobrenome = sobrenome 
            this.genero = genero
            this.telefone = telefone
        }

}