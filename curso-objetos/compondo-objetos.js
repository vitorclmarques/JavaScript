const cliente ={
    nome:"Vitor",
    idade: 18,
    cpf: "2255665556",
    email: "vitor@gmail.com",
    fones:["981301452", "998462012"]
}
//console.log(cliente);
//Adicionando novos objetos dentro de um objeto 
 cliente.dependente = {
    nome:"Leonardo",
    parentesco:"pai",
    dataDeNasc:"23/03/1983"
 }

 console.log(cliente);

 //Adicionando valores dentro do objeto dependente

 cliente.dependente.nome="Leonardo Marques";


 console.log(cliente);

