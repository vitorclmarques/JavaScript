cliente = {
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

 let relatorio ="";
//for in é  usado para objetos (let xxxx in objeto)

for (let info in cliente){

    if (typeof cliente[info] === "object" || typeof cliente[info] === "function"){
        continue;
    }else{
   relatorio += `
   ${info} ===> ${cliente[info]}
   `;
}
}


console.log(relatorio);