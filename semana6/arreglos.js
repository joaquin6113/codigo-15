const personas = ["Pablo", "Juan", "Pedro", "María", "Lucía"]

console.log(personas[3])

// Agregar un elemento al final de la lista
personas.push("Alejandro")

// Para contar cantidad de elementos
console.log(personas.length)
console.log(personas)

// Eliminar el último elemento del array
const eliminado = personas.pop()
console.log("Personas después del pop", personas, eliminado)

// Agrega un elemento al inicio
personas.unshift("Primer elemento")
console.log("Personas unshift", personas)

// Elimina el primer elemento
personas.shift()
console.log("Personas shift", personas)

// for
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const producto = 5
const resultado = []
const resultado2 = []

for (let i = 0; i < numeros.length; i++) {
    const operacion = numeros[i] * producto
    resultado.push(operacion)
}

console.log("Calculadora", resultado)

// for of (↑↑ simpler than ↑↑)
for (const numero of numeros) {
    resultado2.push(numero * producto)
}

console.log("For of", resultado2)

// FOR OF
const numeros1 = [2, 5, 20, 21, 1, -5]

// Quiero hallar el numero mayor de la lista numeros
let mayor = numeros1[0] // 2

for (const numero of numeros1) {
  if (numero > mayor) {
    mayor = numero
  }
}

console.log(mayor)

const numeros2 = [1, 2, 13, 23, 24, 89, 104]

// Quiero un algoritmo que diga la suma de los numeros pares e impares

// Paso 1: crear 2 variables
let sumaPar = 0
let sumaImpar = 0

// Paso 2: for of
for (const numerito of numeros2) {
  if (numerito % 2 === 0) {
    sumaPar += numerito
  } else {
    sumaImpar += numerito
  }
}


console.log("Suma Par", sumaPar)
console.log("Suma Impar", sumaImpar)


const palabra = "monitor"

const vocales = ["a", "e", "i", "o", "u"]
let contador = 0
let contador2 = 0
let letraActual = ""

for (const letra of palabra) {
  for (const vocal of vocales) {
    if (letra !== vocal) {
      contador++ 
    }
  }
}

for (const letra of palabra) {
  if (!"aeiou".includes(letra)) {
    contador2++
  }
}

console.log("contador", contador)
console.log("contador2", contador2)

// map
// forEach

// Map retorna un array y ForEach solo itera

// Ejemplo de calculadora
const numeros3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// map Retorna el array donde a cada elemento de numeros lo ha
// multiplicado * 
const resultado3 = numeros3.map(function (numerito) {
  return numerito * 5
})

console.log(resultado)


const personas2 = [
    {
      name: "Pedro",
      lastname: "Peres",
      age: 21
    },
    {
      name: "Juan",
      lastname: "Zapata",
      age: 22
    },
    {
      name: "Maria",
      lastname: "Tapia",
      age: 25
    }
  ]
  
  // Reto solo quiero obtener los nombres de las personas y guardarlos en un array
  const nombres = personas2.map((persona) => persona.name)
  
  console.log(nombres)

  const ages = personas2.map((persona) => persona.age * 10)
  console.log(ages)

  const older = personas2.filter((persona) => persona.age > 21 && persona.lastname.toLowerCase().includes("t"))
  console.log(older)

  const busqueda = personas2.find((persona) => persona.age > 21)

  
function calcular(n1, n2) {
  return n1 + n2
}

const calcular2 = (n1, n2) => {
  return n1 + n2
}

// Si solo tenemos una linea dentro de la funcion esta puede abreviarse
const calcular3 = (n1, n2) => n1 + n2

const division = (n1, n2) => {
  if (n2 === 0) return "No valido"
  return n1 / n2
}

calcular2(1, 2)
calcular2(2, 3)  

// Crear una funcion que reciba un numero es indique si es par, esta retorna true si no false

// Nivel 1
const esPar = (numero) => {
  if (numero % 2 === 0) {
    return true
  } else {
    return false
  }
}

// Nivel 2
const esParSilvia = (numero) => {
  if (numero % 2 === 0) return true
  return false  
}

const nombre = undefined
const edad = 18
// Nulish coelscing operator ??
console.log(nombre ?? "Nombre no encontrado")
// Operador ternario true ? si : no
console.log(nombre ? nombre : "Nombre no encontrado")
console.log(edad >= 18 ? "Es mayor de Edad" : "Es menor de edad")

const esParJose = (num) => num % 2 === 0 ? true : false

const esParRel = numero => numero % 2 === 0
esParRel(20)

const number = [1, 3, 5, 7, 9]

const result = number.forEach((numero) => {
    console.log(numero)
})

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const numerosFiltrados = numbers.filter((number) => number % 3 === 0)
console.log(numerosFiltrados)