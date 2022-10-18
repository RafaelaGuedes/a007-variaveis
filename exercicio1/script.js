//PARTE 01

//Declarando variável

let nome 
let idade 


//Tipo das variáveis
console.log (typeof(nome))
console.log(typeof(idade))

// Foi impresso pois não foi definido nenhum valor para as variaveis

nome = prompt("Qual o seu nome?")

idade = prompt ("Qual é a sua idade?")

//Imprimir 

console.log(nome)
console.log(idade)

//Tipo das variáveis
console.log (typeof(nome))
console.log(typeof(idade))


// As variáveis passaram a ter o tipo 'string' após terem os valores inseridos.

console.log( "Olá",nome, "você tem", idade,"anos")


//  PARTE 02

/*
let respostaUm = prompt ("Você mora sozinho?")
console.log(respostaUm)
let respostaDois = prompt ("Você é casado?")
console.log(respostaDois)
let respostaTres = prompt ("Você tem filhos?")
console.log(respostaTres)
*/

const perguntaUm = "Você mora sozinha?"
const respostaUm = prompt(perguntaUm)
console.log(perguntaUm, respostaUm)
const perguntaDois = "Você é casada?"
const respostaDois = prompt(perguntaDois)
console.log(perguntaDois, respostaDois)
const perguntaTres = "Você tem filhas?"
const respostaTres = prompt(perguntaTres)
console.log(perguntaTres, respostaTres)

