function isPrime(numero) {
    if (numero === 1) return "es primo"

    let cont = 0

    for (i = 1; i <= numero; i++) {
        if (numero % i === 0) cont ++
    }

    return cont === 2 ? "es primo" : "no es primo"
  }
  
  for (let i = 1; i <= 100; i++) {
    console.log(i, isPrime(i));
  }