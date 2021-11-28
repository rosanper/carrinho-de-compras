export class Produto{
    id: number = 0;
    nome: string = ""
    categoria: string = ""
    descricao: string = ""
    imagem: string = ""
    valor: number = 0
    genero?: string | null = ""


    constructor(id: number, nome: string, categoria: string, descricao: string, imagem: string, 
        valor: number, genero?: string | null){
            this.id= id;
            this.nome = nome;
            this.categoria = categoria;
            this.descricao = descricao;
            this.imagem = imagem;
            this.valor = valor;
            this.genero = genero;
    }




}