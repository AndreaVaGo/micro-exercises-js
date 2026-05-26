export function invertirPalabras (cadena){
    // 1. Quitamos los espacios vacíos del principio y del final del texto
    const cadenaLimpia = cadena.trim();

    // 2. Si la cadena limpia está vacía, devolvemos un string vacío
    if (cadenaLimpia === "") {
        return "";
    }
   
    // 3. Trocear el texto 'cadenaLimpia' por espacios simples usando .split(' ') 
    const arrayConEspacios = cadenaLimpia.split(' ');

    // 4. Creamos el array vacío para guardar las palabras de verdad
    const arrayPalabrasLimpias = [];

    // 5. Recorremos el array elemento por elemento
    for (let i = 0; i < arrayConEspacios.length; i++) {
        // Si el elemento actual NO es un texto vacío
        if (arrayConEspacios[i] !== "") {
            arrayPalabrasLimpias.push(arrayConEspacios[i]);
        }
    }

    // 6. Invertimos el orden y unimos las palabras con un espacio
    return arrayPalabrasLimpias.reverse().join(" ");
}