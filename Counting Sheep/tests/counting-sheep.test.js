import { describe, test, expect } from 'vitest';
import { countAnimals } from '../src/js/counting-sheep.js'; 

describe('countAnimals()', () => { 

    test('Scenario: Solo hay ovejas', () => {
        const animals = [true, true, true];
        const result = countAnimals(animals);
        expect(result).toBe('There are 3 sheep in total');
    });

    test('Scenario: Solo hay lobo', () => {
        const animals = [false, false, false];
        const result = countAnimals(animals);
        expect(result).toBe('UPS!!! A pack of hungry wolves');
    });

    test('Scenario: Hay más ovejas que lobos', () => {
        const animals = [true, true, false];
        const result = countAnimals(animals);
        expect(result).toBe('2 sheep escaped!!!');
    });

    test('Scenario: Hay más lobos que ovejas', () => {
        const animals = [true, false, false];
        const result = countAnimals(animals);
        expect(result).toBe('UPS!!! Wolves ate all the sheep');
    });

    test('Scenario: El input no es un array', () => {
    expect(() => countAnimals(true)).toThrowError('Invalid input: list must contain only boolean values');
});

    test('Scenario: El array contiene elementos que no son booleanos', () => {
    expect(() => countAnimals([true, 'hola', false])).toThrowError('Invalid input: list must contain only boolean values');
});

}); 