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


// Condicional

var idade = 18//prompt("Informe sua idade: ")

if (idade > 18) {
    console.info("Maior de idade")
} else {
    console.warn("Menor de idade")
}


// laços de repetição

// while
console.log("loop while")
var count = 0;
while (count <= 5) {
    console.log(count)

    count++
}

// for
console.log("loop for")
for (count = 0; count <= 5; count++) {
    console.log(count)
}


// trabalhando com data
var d = new Date()
console.log(d)

// imprimindo o mês
console.log(d.getMonth()+1)

// imprimindo os minutos
console.log(d.getMinutes())

// imprimindo o dia
console.log(d.getDay())

// imprimindo a hora
console.log(d.getHours())


// funções

// função para efetuar soma
function soma(n1, n2) {
    return n1 + n2
}

console.log(soma(1,1))

// função para substituir palavra em uma frase
function setReplace(frase, nome, novo_nome) {
    return frase.replace(nome, novo_nome)
}

console.log(setReplace("Vai Japão", "Japão", "Brasil"))


function validaIdade(idade) {
    var validar = false;
    if (idade >= 18) {
        validar = true
    }

    return validar
}

idade = 20
console.log(validaIdade(idade))

function clicou1() {
    console.log("Obrigado por clicar")
}

function clicou() {
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar!</b>"
}

// redirecionar
function redirecionar() {
    //window.open("http://www.google.com")
    window.location.href = "http://www.google.com"
}

function trocar() {
    console.log("trocar texto")
    document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse!"
}

function voltar() {
    document.getElementById("mousemove").innerHTML = "Passe o mouse aqui"
}