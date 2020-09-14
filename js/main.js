var nome = "Fulano Ciclano"
var idade = 40

var frase = "Japão é o melhor time do mundo"

console.log("nome: " + nome + " idade: " + idade)

console.log(frase.replace("Japão", "Brasil"))

console.log(frase.toUpperCase())


/* Array */

var lista = ["maçã", "pêra", "laranja"]

// imprime todo array
console.log(lista)

// imprime elemento que esta na posição um
console.log(lista[1])

// adicionar novo item a lista
lista.push("uva")
console.log(lista)

// retirar elemento do array
lista.pop()
console.log(lista)

// ver tamanho da lista
console.log(lista.length)

// inverter ordem dos elementos
lista.reverse()
console.log(lista)

// converte array para string
console.log(lista.toString());

// converte para string e adiciona um caracter, a escolher, como um separador
console.log(lista.join(' - '))


// Dicionário
var fruta = {nome: "maça", cor: "vermelha"}
console.log(fruta)

console.log(fruta.nome)

// Lista de Dicionários
var frutas = [{nome: "maça", cor: "vermelha"},
              {nome: "uva", cor: "roxa"}]
console.log(frutas)

console.log(frutas[1].nome)
