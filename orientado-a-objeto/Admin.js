import User from "./User.js";

export default class Admin extends User{
    constructor(nome,email,nascimento,role='Admin', ativo=true){
        super(nome,email,nascimento,role, ativo)
    }

    criarCurso(nomeDoCurso, vagas){
        return`Curso de ${nomeDoCurso}, criado com ${vagas} vagas`;

    }
}
// const novoAdmin =  new Admin('Leo', 'L@l.com', '2006-01-01')
// console.log(novoAdmin.criarCurso('JS', 36));
