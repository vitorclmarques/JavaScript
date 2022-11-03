const clientes ={
    nome:"Vitor",
    idade: 18,
    cpf: "2255665556",
    email: "vitor@gmail.com"
}

//Acessando os valores dentro do obajeto e imprimindo no terminal
console.log(`Meu nome é ${clientes.nome} e tenho ${clientes.idade} anos.`)

//Acessando dentro de string e puxando apenas 3 numeros
console.log(clientes.cpf.substring(0,3));


