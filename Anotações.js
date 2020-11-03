// Express-generator
npm install - g express - generator

//Criar projeto
/**O "-e" é para usar a view-engine (motor de renderização) EJS, 
 * ao invés do tradicional Jade/Pug (falaremos dele mais pra frente).
 *  Já o "--git" deixa seu projeto preparado para versionamento com Git. 
 * usando -e, nossa aplicação será configurada com a view-engine EJS (Embedded JavaScript) 
 * que permite misturar HTML com JavaScript server-side para criar os layouts.
 * */
express - e--git workshop

//Instalar dependências
npm install

//Iniciar servidor Web
npm start

//Dependencia MongoDB
npm install mongodb

//iniciar mongoDB
mongod--dbpath C: \Users\Generica\Documents\MongoDB

//estabelecer coneção
mongo

// Ver Dbs
show databases

//mudar DB
use workshop

// ver coleções
show collections

//listar os documentos de uma coleção de customers
db.customers.find()

//Inserir Dados
db.customers.insert({ nome: "Aline", idade: 28 })
db.customers.insert({ nome: "Helio", idade: 31 })
db.customers.insert({ nome: "Teté", idade: 9 })

exemplo
    > custArray =[{ nome: "Monica", idade: 31 }, { nome: "Teste", "uf": "RS" }]
        > db.customers.insert(custArray)
        > db.customers.find().pretty()

//Filtrar Por 
db.customers.find({ uf: "RS" })

//Regex
db.customers.find({ nome: /a/ })
db.customers.find({ nome: { $regex: /a/ } })


//Maior ou Igual
db.customers.find({ idade: { $gte: 18 } })
db.customers.find({ nome: "Luiz", idade: { $gte: 18 } })

//$e: exatamente igual(=)
//$ne: diferente(<> ou !=)
//$gt: maior do que (>)
//$lt: menor do que (<) 
//$lte: menor ou igual a (<=)
//$in: o valor está contido em um array de possibilidades, como em um OU. Ex: 
//{idade: {$in: [10,12] }}
//$all: MongoDB permite campos com arrays. Ex:
//{ tags: ["NodeJS", "MongoDB"] }. 
//Com esse operador, você compara se seu campo multivalorado possui todos os valores de um array específico. Ex: 
//{tags: {$all: ["NodeJS", "Android"]}}
//db.customers.find().skip(1).limit(10).

//1 p/ Crescente e -1 Decrescente
db.customers.find().sort({ idade: 1 })

//Update
db.customers.updateOne({ _id: ObjectId("5f61a4ee6fb6cb5882544fd4") }, { $set: { idade: 20 } })
//$unset: remove o respectivo campo do documento; 
//$inc: incrementa o valor original do campo com o valor especificado; 
//$mul: multiplica o valor original do campo com o valor especificado; 
//$rename: muda o nome do campo para o nome especificado;

//Atualiza ou insere Campodb.
customers.update({ nome: "LuizTools" }, { nome: "LuizTools", uf: "RS" }, { upsert: true })

//Delete 
db.customers.deleteOne({ nome: "Aline" })
db.customers.deleteOne({ "_id": ObjectId("5f61a4ee6fb6cb5882544fd4") });


//Iniciar Projeto Limpo
npm init

//Depencia Mongo outra maneira de faz
npm i express mongodb

//body-parser para API
npm i body - parser

//Iniciar aplicação, apontando arquivo
node app

//Post via Linha de comando
curl -X POST -d "{'nome':'Curl', 'idade': 11, 'uf': 'RJ'}" http://localhost:3000/clientes
curl -X PUT -d "{'nome':'Postman', 'idade': 20, 'uf': 'SP'}" http://localhost:3000/clientes/5f63d468900a0c1c80753a9b
curl -X PATCH -d "{'nome':'POSTMAN'}" http://localhost:3000/clientes/59ac8350e07d4f10cf6a74f6
curl -X DELETE http://localhost:3000/clientes/59ac8350e07d4f10cf6a74f6

//Config headers do postman
KEY = Content - Type
VALUE = application / json

//Formato postman em body/raw
{ "nome": "XXX Franca", "idade": 55, "uf": "MG" }

//Permitir requisições externas
//https://github.com/expressjs/cors
npm install cors
