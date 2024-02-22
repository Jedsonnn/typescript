// Leitura Certa
class CadastroLivro {

    // Metodo construtor
    constructor(
        public nome: string,
        public autor: string,
        public publicacao: Date) {

    }
    cadastroLivro() {
        console.log(`Cadastro de Livros`)
        console.log(`Nome: ${this.nome}`)
        console.log(`Autor: ${this.autor}`)
        console.log(`Data de Publicação: ${this.publicacao}`)
    }
}
const cadastrolivro1 = new CadastroLivro('Clean Code', 'Robert Cecil Martin', new Date('2008-7-8'))
console.log(cadastrolivro1.cadastroLivro())

class CadastroUsuario {

    // Metodo construtor
    constructor(
        public nome: string,
        public cpf: string,
        public telefone: string,
        public endereco: any[]) {

    }
    cadastroUsuario() {
        console.log('Cadastro do Usuario')
        console.log(`Nome do `)
    }
}
const cadastrousuario1 = new CadastroUsuario('Lucas', '3353925524', '46663646', ['Rua quadrada', 'Av. redonda', 234])
console.log(cadastrousuario1)

class EmprestimoLivro {

    // Metodo construtor
    constructor(
        public nome: string,
        public cpf: string,
        public telefone: string,
        public quantidade: number,
        public emprestimo: Date,
        public entrega: Date) {

    }
}
const emprestimolivro1 = new EmprestimoLivro('Lucas', '3353925524', '46663646', 3, new Date('2024-1-3'), new Date('2024-2-2'))
console.log(emprestimolivro1)