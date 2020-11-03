module.exports = class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.cadastro = new Date();
    }

    toString() {
        return `Olá ${this.nome}, você tem ${this.idade} anos, foi cadastrado em ${this.cadastro}`
    }

}