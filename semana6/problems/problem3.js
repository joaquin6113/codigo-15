/*
¿ES UN ANAGRAMA?
Enunciado: Escribe una función que reciba dos palabras (String) y 
retorne verdadero o falso (Bool) según sean o no anagramas.
Un Anagrama consiste en formar una palabra reordenando TODAS las letras de otra palabra inicial.
NO hace falta comprobar que ambas palabras existan.

Dos palabras exactamente iguales no son anagrama.
*/

/* function anagramChecker(word, word2) {
    if (word.toLowerCase() === word2.toLowerCase()) return false
    const wordA = word.split("").sort().join("")
    const wordB = word2.split("").sort().join("")
    if (wordA === wordB) {
        return true
    } return false
} */

function sortText(word) {
    return word.toLowerCase().split("").sort().join("")
}

function anagramChecker(word, word2) {
    if (word.toLowerCase() === word2.toLowerCase()) return false

    return sortText(word) === sortText(word2)
}

console.log(anagramChecker("amor", "roma"))
console.log(anagramChecker("Hola", "hola"))
console.log(anagramChecker("tres", "trez"))