const cliente ={
    nome:"Vitor",
    idade: 18,
    cpf: "2255665556",
    email: "vitor@gmail.com",
    fones:["981301452", "998462012"]
}
 
//Acessando array dentro do objeto e coletando seus dados 

cliente.fones.forEach(fone =>console.log(fone) 
    );