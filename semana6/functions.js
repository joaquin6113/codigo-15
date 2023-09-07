// Bloque de código que hará algo

/*Recomendaciones
  El nombre de la función sea un verbo infinitivo */

/*
  Recibir
  número1 = n1
  número2 = n2
  operador = + - * / */
function calcular(n1, n2, operador) {
    if (operador === "+") {
        return n1 + n2
    } else if (operador === "-") {
        return n1 - n2
    } else if (operador === "*") {
        return n1 * n2
    } else if (operador === "/") {
        if (n2 !== 0) {
            return n1 / n2
        } else {
            return "No es posible dividir entre cero"
        }
    } else {
        return "Operador no identificado/válido"
    }
}

// Siempre debemos llamar a la función
console.log(calcular(23, 45, "+"))
console.log(calcular(18, 0, "/"))
console.log(calcular(18, 3, ")"))

function calcular2(n1, n2, operador) {
    if (operador === "+") return n1 + n2  
    if (operador === "-") return n1 - n2  
    if (operador === "*") return n1 * n2  
    
    if (operador === "/") {
        if (n2 !== 0)  return n1 / n2
        else return "No es posible dividir entre cero"
    } 
    return "Operador no identificado/válido"
}

console.log("↓ Función mejorada ↓")
console.log(calcular2(23, 45, "+"))
console.log(calcular2(18, 0, "/"))
console.log(calcular2(18, 3, ")"))

function calcular3(n1, n2, operador) {
    if (n2 === 0 && operador === "/") return "No es posible dividir entre cero"

    const operaciones = {
        "+": n1 + n2,
        "-": n1 - n2,
        "*": n1 * n2,
        "/": n1 / n2,
        "powers": Math.pow(n1, n2)
    }

    return operaciones[operador] ?? "Operación no válida"
}

console.log("↓ Función mejorada 2 ↓")
console.log(calcular3(23, 45, "+"))
console.log(calcular3(18, 0, "/"))
console.log(calcular3(18, 3, ")"))
console.log(calcular3(4, 6, "powers"))

function calcular4(n1, n2, operador) {
    try {
        const res = eval (`${n1}${operador}${n2}`)
        return isFinite(res) ? res : "Operación no válida"
    } catch (err) {
        return err;
    }
}

console.log("↓ Función mejorada 3 ↓")
console.log(calcular4(23, 45, "+"))
console.log(calcular4(18, 0, "/"))
console.log(calcular4(18, 3, "?"))
console.log(calcular4(4, 6, "**"))
