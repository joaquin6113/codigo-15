const nombre = "Joaquín"
const apellido = "Guevara"
const dni = "89457136"

const datos = nombre + " " + apellido + " " + dni
const datos2 = `Datos: ${nombre} ${apellido} ${dni}`

console.log("Concatenación", datos)
console.log("Tempate string", datos2)

// Formas de consola
console.log("Info")
console.error("Error de consola")
console.warn("Warning de consola")

// Operadores matemáticos
console.log("Suma 1", 2 + 2)
console.log("Suma 2", 2 + "2")
console.log("Resta 1", 20 - 10)
console.log("Resta 2", 20 - "5")
console.log("División 1", 1300 / 5)
console.log("División 2", 1300 / "5")
console.log("Multiplicación", 23 * 6)
console.log("Residuo MOOD", 40 % 5)
console.log("Residuo MOOD", 40 % 3)
console.log("Raíz cuadrada", Math.sqrt(100))
console.log("Potencia", Math.pow(4, 2))
console.log("PI", Math.PI)

// Operadores de comparación -retornan un boolean (true/false)-
// Igualdad
// Doble igual solo compara el valor
console.log("Igualdad 1", 2 == "2")
// Triple igual compara el valor y el tipo de dato
console.log("Igualdad 2", 2 === "2")
// Diferencia
console.log("Diferencia 1",2 != "2")
console.log("Diferencia 2",2 !== "2")
// Mayor, menor, ...
console.log(100 > 10)
console.log(10 > 100)
console.log(100 < 10)
console.log(10 < 100)
console.log(100 >= 100)
console.log(101 >= 100)
console.log(101 <= 100)

// Condicionales
console.log("===== Condicionales =====")

let edad = 15

if(edad >= 18) {
    console.log("La persona es mayor de edad")
} else {
    console.log("La persona es menor de edad")
}

const numero = 12 // prompt("Escribe un número")
console.log(typeof Number(numero))
// Convertir variable a number
if (Number(numero) % 2 === 0) {
    console.log("El número es par")
} else {
    console.log("El número es impar")
}

// &&
if (numero > 10 && numero < 20 && typeof numero=== "number") {
    console.log("Este número está entre 10 y el 20")
} else {
    console.log("No cumple las condiciones")
}

// ||
if (numero > 10 || numero < 20 || typeof numero=== "number") {
    console.log("Este número cumple alguna condición")
} else {
    console.log("No cumple las condiciones")
}

console.log("===== Fecha =====")
const fecha = new Date ()
const hora = fecha.getHours()

if (hora < 12) {
    console.log("Buenos días")
} else if (hora < 18) {
    console.log("Buenas tardes")
} else {
    console.log("Buenas noches")
}