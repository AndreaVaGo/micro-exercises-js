# Reto FizzBuzz - Desarrollo Guiado por Pruebas (TDD)

Este proyecto resuelve el clásico reto matemático FizzBuzz aplicando la metodología **TDD** (Test-Driven Development) utilizando **Vitest** como framework de pruebas.

## Escenarios Cubiertos
1. **Escenario 1:** Retorna 'Fizz' cuando el número es divisible por 3.
2. **Escenario 2:** Retorna 'Buzz' cuando el número es divisible por 5.
3. **Escenario 3:** Retorna 'FizzBuzz' cuando el número es divisible por 3 y por 5 (ej. 15).
4. **Escenario 4:** Retorna el número en formato texto si no es divisible por ninguno de los anteriores (ej. 7 -> "7").
5. **Escenario 5:** Lanza un error si el dato proporcionado no es un número (ej. "hola").

## Resultados de las Pruebas (Testing)
A continuación se muestra la captura de pantalla de la terminal con todos los escenarios validados y aprobados con éxito:

![Resultados del Testing de Vitest](./src/assets/resultado-testing.png)