let nVentas = parseInt(prompt("¿Cuántas ventas realizaste?"))

let cantVentas1 = 0
let cantVentas2 = 0
let cantVentas3 = 0

let totalVentas1 = 0
let totalVentas2 = 0
let totalVentas3 = 0

let totalFinal = 0

for(let cont = 1; cont <= nVentas; cont++) {
    let valorVenta = +prompt("Ingrese el monto de la venta")

    if (valorVenta > 1000) {
        cantVentas1++
        totalVentas1 += valorVenta
    } else if (valorVenta > 500) {
        cantVentas2++
        totalVentas2 += valorVenta
    } else {
        cantVentas3++
        totalVentas3 += valorVenta
    }

    totalFinal += valorVenta
}

alert(`Ventas mayores a 1000: \n 
       Cantidad: ${cantVentas1} \n 
       Total: ${totalVentas1} \n
       Ventas mayores a 500 y menores e iguales que 1000: \n 
       Cantidad: ${cantVentas2} \n 
       Total: ${totalVentas2} \n
       Ventas menores a 500: \n 
       Cantidad: ${cantVentas3} \n 
       Total: ${totalVentas3} \n` )