import { describe, it, expect } from 'vitest'

function sumar(a, b) {
    return a + b
}

function dividir(a, b) {
    if (b === 0) return "No se puede dividir entre cero"
    return a / b
}

describe("Test de operaciones", () => {
    it("sumar números", () => {
        expect(sumar(12, 8)).toBe(20);
        expect(sumar(275, 25)).toBe(300);
        expect(sumar(45, 55)).toBe(100);
    });

    it("dividir números", () => {
        expect(dividir(15, 0)).toBe("No se puede dividir entre cero")
        expect(dividir(50, 10)).toBe(5)
    })
}) 