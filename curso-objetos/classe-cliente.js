class Cliente {
    constructor(nome,email,cpf,saldo){
        this.nome = nome;
        this.email= email;
        this.cpf= cpf;
        this.saldo= saldo;
    }
    depositar(valor){
        this.saldo += valor;
       console.log(`Foi depositado ${valor} R$`)
    }

    exibirSaldo(){
        console.log(this.saldo)
    }
}

const vitor = new Cliente ("Vitor", "vitor@email.com", "009909009", 100);

console.log(vitor);

vitor.depositar(200);
vitor.exibirSaldo();