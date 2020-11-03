const Pessoa= require("./Pessoa");

let a= new Pessoa("Helio", 31);
console.log(a.toString());

let meuObjeto = [
    {
        nome: 'Helio',
        idade: 31
    },
    {
        nome: 'Tete',
        idade: 8
    }
]

let menor= meuObjeto.filter((obj)=>{
    return obj.idade>18;
});

let somaIdade = meuObjeto.reduce((valor, obj, index, meuObjeto)=>{
    valor+=obj.idade;
    return valor;
},0);

