let ahorro = 0
for(let mes = 1; mes <= 12; mes++) {
    let cant = parseFloat(prompt("¿Cuánto desea ahorrar este  mes?"))
    // ahorro = ahorro + cant
    ahorro += cant
    alert(`Ud. ahorró en el mes ${mes}, S/ ${ahorro}`)
}

alert(`Ud. ahorró en total ${ahorro}`)