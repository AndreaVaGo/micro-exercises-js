// Importamos las herramientas de Vitest
import { describe, expect, test } from "vitest";
// Importamos nuestra función 
import { fizzBuzz } from "../js/fizzbuzz.js";

describe("Reto FizzBuzz - Escenario por Escenario", () => {

    // ESCENARIO 1: Número divisible por 3
    test("Debe retornar 'Fizz' cuando se proporciona el número 3", () => {
        // Given (Dado que tengo el número 3)
        const numero = 3;
        // When (Cuando ejecuto la función)
        const resultado = fizzBuzz(numero);
        // Then (Entonces el resultado esperado es "Fizz")
        expect(resultado).toBe("Fizz"); //expect "Espero" y .toBe "que sea"
    });

    // ESCENARIO 2: Número divisible por 5
    test("Debe retornar 'Buzz' cuando se proporciona el número 5", () => {
        const numero = 5;
        const resultado = fizzBuzz(numero);
        expect(resultado).toBe("Buzz"); // Aquí esperamos que devuelva "Buzz"
    });

    // ESCENARIO 3: Número divisible por 3 y 5
    test("Debe retornar 'FizzBuzz' cuando se proporciona el número 15", () => {
        const numero = 15;
        const resultado = fizzBuzz(numero);
        expect(resultado).toBe("FizzBuzz"); // Esperamos que devuelva la palabra combinada
    });

    // ESCENARIO: Número que NO es divisible por 3 ni por 5 (Caso del 7)
    test("Debe retornar '7' cuando se proporciona el número 7", () => {
        const numero = 7;
        const resultado = fizzBuzz(numero);
        expect(resultado).toBe("7"); // Esperamos que lo devuelva como texto
    });

    // ESCENARIO: El dato proporcionado no es un número
    test("Debe lanzar un error cuando se proporciona el valor 'hola'", () => {
        const valorInvalido = "hola";
        // En Vitest, para probar que algo lanza un error, se pasa la función dentro de una función flecha
        expect(() => fizzBuzz(valorInvalido)).toThrowError("El dato proporcionado debe ser un número");
    });


});