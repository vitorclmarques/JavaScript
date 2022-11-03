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
//utilizando metodo Object.keys ele puxa todas a chaves dentro do bajeto 
// const propsClientes = Object.keys(cliente);
// console.log(propsClientes);

//Criando function para extrair chave de dentro do objeto e oferecer seguro se tiver depentes 
function oferecerSeguro(obj){
    const propsClientes = Object.keys(cliente);
    if(propsClientes.includes("dependentes")){
        console.log(`Oferta de seguro de vida para ${obj.nome}`);
    }
}

oferecerSeguro(cliente)


//outros metodos para extrair valores de dentro de objetos e o metodo que traz arryas mostrando as chaves e os valores.
//console.log(Object.values(cliente));
//mostra chaves e valores dentro de arrays [chaves, valores]
//console.log(Object.entries(cliente));

