import User from "./User.js";
import Admin from "./Admin.js";
import Docente from "./Docente.js";

// const novoUser = new User('Mariana', 'm2m.com', '2021-01-02');


// const novoAdmin= new Admin('Rodrigo', 'r@r.com,2021-01-01')
// console.log(novoAdmin.nome);
// novoAdmin.nome='';
// console.log(novoAdmin.nome);
const novoUser = new User('Juliana', 'Souza', 'j@j.com', '2021-01-01')
console.log(novoUser.nome) //'Juliana'
novoUser.nome = 'Juliana Silva Souza'
console.log(novoUser.nome) //'Juliana'
console.log(novoUser.sobrenome) //'Silva Souza'COPIAR CÓ