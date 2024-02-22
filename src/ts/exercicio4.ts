// Sem bagunça
class CadastroProjeto {

    // Metodo construtor
    constructor(
        public projetos_andamento: string,
        public equipe_responsavel: string) {

    }
    cadastroProjeto() {
        console.log(`Cadastro`)
        console.log(`Projetos em andamento: ${this.projetos_andamento}`)
        console.log(`Equipe Responsavel: ${this.equipe_responsavel}`)
    }
}
const cadastro_projeto = new CadastroProjeto('Limpeza', 'Galera da Limpeza')
console.log(cadastro_projeto.cadastroProjeto())

class ControleTarefas {



    // Metodo construtor
    constructor(
        public tarefa: string,
        public nome: string,
        public descricao: string,
        public equipe_responsavel: string) {


    }
    controleTarefas() {
        console.log(`Controle de Tarefas`)
    }
}
const controle_tarefas = new ControleTarefas('Limpar tudo', 'Limpa Tgeral', 'limpar', 'Lucas')
console.log(controle_despesas.controleDespesas())