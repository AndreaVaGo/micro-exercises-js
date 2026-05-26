import { describe, test, expect } from 'vitest';
import { invertirPalabras } from '../src/invertir-palabras.js';

describe('Pruebas para la función invertirPalabras', () => {

    test('Debería invertir un texto simple de dos palabras', () => {
        expect(invertirPalabras("Hello World")).toBe("World Hello");
    });

    test('Debería invertir un texto simple con signos de puntuación', () => {
        expect(invertirPalabras("Hi There.")).toBe("There. Hi");
    });

    test('Debería quitar espacios al principio y al final e invertir', () => {
        expect(invertirPalabras("   espacios al rededor   ")).toBe("rededor al espacios");
    });

    test('Debería controlar múltiples espacios intermedios', () => {
        expect(invertirPalabras("Muchos      espacios        intermedios")).toBe("intermedios espacios Muchos");
    });

    test('Debería devolver un string vacío si la entrada está vacía o solo tiene espacios', () => {
        expect(invertirPalabras("   ")).toBe("");
    });

});