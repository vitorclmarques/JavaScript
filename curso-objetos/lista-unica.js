cliente = [
    {
    nome: "Vitor",
    cpf: "2255665556",
    dependentes: [{
        nome: "Barbosa",
        parentesco: "filho",
        dataDeNasc: "23/03/1983"
    },{
        nome: "Katia",
    parentesco: "filha",
    dataDeNasc: "23/03/1980"
    }],
},
{
    nome: "julia",
    cpf: "2255665556",
    dependentes: [{
        nome: "Samia",
        parentesco: "filho",
        dataDeNasc: "23/03/2005"
    }],
}

]

//puxando apenas os dependentes dos clientes utilizando spread operator ou sintaxe de espalhamento
const listaDependentes= [...cliente[0].dependentes, ...cliente[1].dependentes]
//Saida em forma de tabela 'table'
console.table(listaDependentes);