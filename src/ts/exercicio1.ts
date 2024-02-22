//Hospital chega doente sai bom
class Pessoa{

    
    constructor(
       public nome: string, 
       public endereco: string[], 
       public email: string, 
       public telefone: string, 
       public data_nascimento: Date, 
       public rg: string
        ){}
    mostraDados()
    {
        console.log(`Dado da Pessoa:`)
        console.log(`Nome: ${this.nome}`)
        console.log(`Endereco: ${this.endereco}`)
        console.log(`RG: ${this.rg}`)
        console.log(`E-mail: ${this.email}`)
        console.log(`Telefone: ${this.telefone}`)
        console.log(`Data nascimento: ${this.data_nascimento.toLocaleDateString('pt-br')}`)
    }
}

class Funcionario extends Pessoa {
    // Metodo construtor da classe
    constructor(
        public cargo: string, 
        public matricula: string, 
        nome: string, 
        endereco: string[], 
        email: string, 
        telefone: string, 
        data_nascimento: Date, 
        rg: string) {
        super(nome, endereco, email, telefone, data_nascimento, rg)
        
    }
    // método especifico da classe 
    mostraDados()
    {
        super.mostraDados()
        console.log(`Cargo: ${this.cargo}`)
        console.log(`Matricula: ${this.matricula}`)
    }
}
const funcionario1 = new Funcionario('medico', '2123', 'jedson', ['rua jordao'], 'jedson@gmail.com' ,'854454544',new Date(2023-1-15) ,'00206')
console.log(funcionario1.mostraDados())


class Consultas {
    ;
    constructor(
       public local: string, 
       public data: Date, 
       public convenio: boolean, 
       public medico: string) {
        
    }
    mostraDados()
    {
        console.log(`Dado da Consulta:`)
        console.log(`Data: ${this.data}`)
        console.log(`Local: ${this.local}`)
        console.log(`Convenio: ${this.convenio}`)
        console.log(`Medico: ${this.medico}`)
    }
}

const consulta1 = new Consultas('Lagoa Azul', new Date('2024-2-19'), false, 'Lucas')
console.log(consulta1.mostraDados())

class Paciente extends Pessoa {
   
    constructor(
       public  cpf: string, 
       public crtaosus: string, 
       public obs_alergias: string, 
        nome: string, 
        endereco: string[], 
        email: string, 
     telefone: string, 
        data_nascimento: Date, 
        rg: string)
    {
        super(nome, endereco, email, telefone, data_nascimento, rg)
        
    }
    mostrarDados()
    {
        console.log(`Dado do Pciente:`)
        console.log(`E-mail: ${this.cpf}`)
        console.log(`Telefone: ${this.crtaosus}`)
        console.log(`cargo: ${this.endereco}`)
        console.log(`Data nascimento: ${this.endereco}`)
    }
}
const paciente1 = new Paciente('00263', 'fjjedson', 'nao', 'gabriel', ['rua joao'], 'joao@gemail.com','00587',new Date('2023-1-19'),'0025,')
console.log(consulta1.mostraDados())
