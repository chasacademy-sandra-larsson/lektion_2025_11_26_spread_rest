/*
 * Varför använda immutable?
 * 
 * - Originaldata ändras aldrig, så det är lättare att felsöka
 * - Undviker oväntade ändringar i data
 * - Fungerar bra med React och state management
 * - Lättare att testa kod
 */



const numbers = [1,2,3];

// Mutable way
numbers.push(999);


// Immutable way 
const numbersCopy = [...numbers];

// Objekt 
const person = {
    name: "Sandra",
    age: 30
}

// Mutable way
person.age = 35;

// Immutable
const personCopy = {...person};

const updatePerson = {...person, age: 23};


// Immutaable - map, filter, reduce
const fruits = ["apple", "banana", "orange"];

const updatedFruits = fruits.filter(fruit => fruit !== "banana");


// Immutable 
const slicedFruits = fruits.slice(1,1);

// Mutable 
fruits.splice(1,1);