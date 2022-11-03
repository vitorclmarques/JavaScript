const cliente = {
    nome: "Vitor",
    idade: 18,
    cpf: "2255665556",
    email: "vitor@gmail.com",
    fones: ["981301452", "998462012"],
    dependentes: [{
        nome: "Barbosa",
        parentesco: "pai",
        dataDeNasc: "23/03/1983"
    },{
        nome: "Katia",
    parentesco: "mae",
    dataDeNasc: "23/03/1980"
    }],
    saldo:100,
    depositar:function(valor){
        this.saldo += valor
    },
    sacar:function(valor){
        this.saldo -= valor
    }
}
//utilizanod funções dentr de objetos, assim o usuario consegue depositar e sacar o dinheiro, simulção de um conta bancaria.
console.log(cliente.saldo);

cliente.depositar(200);

console.log(cliente.saldo);

cliente.sacar(120);

console.log(cliente.saldo);

