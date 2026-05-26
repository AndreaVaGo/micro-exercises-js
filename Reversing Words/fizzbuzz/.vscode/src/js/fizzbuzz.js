export function fizzBuzz(num) {
    
    if (typeof num !== "number") {
        throw new Error("El dato proporcionado debe ser un número");
    }

    const isDivisibleBy3 = num % 3 === 0;
    const isDivisibleBy5 = num % 5 === 0;
    const isSeven = num === 7; // <-- Creamos la condición específica para el 7

    if (isDivisibleBy3 && isDivisibleBy5) { 
        return "FizzBuzz";
    }

    if (isDivisibleBy3) {
        return "Fizz";
    }

    if (isDivisibleBy5) { 
        return "Buzz";
    }

    // Escenario del 7 hecho con un 'if' tradicional
    if (isSeven) {
        return "7"; // <-- Devolvemos el texto "7"
    }

    // Para cualquier otro número (por si acaso)
    return num.toString();
}