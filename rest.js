// ************************ Exempel 1 ************************//
// Samla ihop parametrar till en funktion. Sparas i en array.

// const add = (...args) => {
//     let sum = 0;
//     for(let i = 0; i < args.length; i++) {
//         sum += args[i];
//     }
//     return sum;
// }

console.log(add(1,2,3,4,5,7,8,9));



// // ************************ Exempel 2 ************************//
// Samla ihop resten av parametrarna till en funktion. Sparas i en array.

const add = (x, ...args) => {
    let sum = 0;
    for(let i = 0; i < args.length; i++) {
        sum += args[i];
    }
    return sum * x;
}

console.log(add(100, 1,2,3,4,5,7,8,9))



// ************************ Exempel 3 ************************//
// Rest i objekt
const person = {
    name: 'Sandra',
    age: 30,
    city: 'Stockholm',
    country: 'Sweden',
    email: 'sandra@larsson.com'
}



// ************************ Exempel 4 ************************//
// Rest i array
const numbers = [1, 2, 3, 4, 5];

