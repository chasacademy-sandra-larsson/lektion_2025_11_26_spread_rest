// Med spread kan man sprida värden från en array eller objekt till en ny array eller objekt.

// ************************ Exempel 1 ************************//
// Spread "sprider" värden från en array till en ny array.


const numbers = [1, 2, 3, 4, 5];




// ************************ Exempel 2 ************************//
// Spread kopierar hela objektet.

const person = {
  name: 'Sandra',
  age: 30
}




// ************************ Exempel 3 ************************//
// Kopiera en array eller objekt


const original = [1, 2, 3];




// ************************ Exempel 4 ************************//
// Spread kopierar värden från en array till en funktion.


const numbers3 = [1, 2, 3];
const add = (a, b, c) => a + b + c;





// ************************ Exempel 5 ************************//
// Med spread kan man merga flera arrayer eller objekt. Istället för att använda concat.

const numbers4 = [1, 2, 3];
const numbers5 = [4, 5, 6];
const numbers6 = [7, 8, 9];

