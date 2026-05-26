export function countAnimals(animals){

    if (!Array.isArray(animals)) {
        throw new Error('Invalid input: list must contain only boolean values');
    } 

    animals.forEach(animal => {
        if (typeof animal !== 'boolean') {
            throw new Error('Invalid input: list must contain only boolean values');
    }
});

    let sheepCount = 0;
    let wolfCount = 0;

    animals.forEach(animal => {
        if (animal === true) {
            sheepCount++;
        } else {
            wolfCount++;
        }
    });

    if (wolfCount === 0) {
        return `There are ${sheepCount} sheep in total`; 
    } else if (sheepCount === 0) {
        return `UPS!!! A pack of hungry wolves`; 
    } else if (sheepCount > wolfCount) {
        return `${sheepCount} sheep escaped!!!`;
    } else if (wolfCount > sheepCount) {
        return `UPS!!! Wolves ate all the sheep`; 
    }
}