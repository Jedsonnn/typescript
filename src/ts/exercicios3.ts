// Banco dinheiro seguro
class CadastroConta {


    // Metodo construtor
    constructor(
        public saldo: string,
        public conta: string,
        public titularconta: string,
        public agencia: string) {

    }
    cadastroConta() {
        console.log(`Cadastro`)
        console.log(`Saldo da Conta: ${this.saldo}`)
        console.log(`Numero da Conta: ${this.conta}`)
        console.log(`Titular da Conta: ${this.titularconta}`)
        console.log(`Agencia bancaria: ${this.agencia}`)
    }
}
const cadastroconta = new CadastroConta('324', '2343455353', 'Lucas', '12')
console.log(cadastroconta.cadastroConta())

class ControleDespesas {
    

    // Metodo construtor
    constructor(
       public transferencias: string, 
       public transferenciasM: string, 
       public gastosM: string, 
       public comprovantes: string) {
        
    }
    controleDespesas() {
        console.log(`Controle de despesas`)
        console.log(`Transferencias: ${this.transferencias}`)
        console.log(`Transferencias mensais: ${this.transferenciasM}`)
        console.log(`Gastos mensais: ${this.gastosM}`)
        console.log(`Comprovantes bancários: ${this.comprovante}`)
    }
}
const controle_despesas = new ControleDespesas('23', '2', '74', '12')
console.log(controle_despesas.controleDespesas())

class Planejamento {
    poupanca: string;

    // Metodo construtor
    constructor(poupanca: string) {
        this.poupanca = poupanca;
    }
    planejamento() {
        console.log(`Planejamento`)
        console.log(`Poupança: ${this.poupanca}`)
    }
}
const planejamento = new Planejamento('500')
console.log(planejamento.planejamento())