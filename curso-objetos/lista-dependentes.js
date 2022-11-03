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
    }]
}

//Adiconando mais um indice dentro do array dependentes

cliente.dependentes.push({
    nome: "Katia",
    parentesco: "mae",
    dataDeNasc: "23/03/1980"
})

//console.log(cliente);

const parenteMaisNovo = cliente.dependentes.filter(dependente => dependente.dataDeNasc === "23/03/1983")
//filtrando dependente com a menor idade, utilizando o metodo filter com aronfuction    
console.log(parenteMaisNovo[0].nome);
console.log(parenteMaisNovo)

