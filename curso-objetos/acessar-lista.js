const cliente ={
    nome:"Vitor",
    idade: 18,
    cpf: "2255665556",
    email: "vitor@gmail.com"
}

//acessando clientes com arrays

const chave = ["nome", "idade","cpf","email"]

//console.log(clientes[chave[0]]);

//utilizando forEach para puxar todas info do cliente
chave.forEach(info => console.log(cliente[info]))
