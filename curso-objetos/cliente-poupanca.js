//objetos criados com new a partir de um construtor herdam a propriedade prototype de sua função construtoraPrototype

function Cliente (nome,cpf,email,saldo){
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function (valor){
        this.saldo += valor;
    }
    
}

function ClientePoupanca (nome,cpf,email,saldo,saldoPoup){
    Cliente.call(this,nome,cpf,email,saldo);
    this.saldoPoup = saldoPoup;
}


const ju = new ClientePoupanca("Juliana", "54646655", "juju@gmail.com", 200, 300);

console.log(ju);

//Adicionar função dentro de ClientePoupanca usando prototype

ClientePoupanca.prototype.depositarPoup = function(valor){
    this.saldoPoup += valor;
}

ju.depositarPoup(50);

console.log(ju.saldoPoup);

