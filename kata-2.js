/**
 * 1 - Écris une fonction sumOfEvenNumbers(numbers) qui prend en entrée un tableau d'entiers numbers et retourne la somme de tous les nombres pairs présents dans le tableau.
 */

const numbers = [1, 2, 3, 4, 5, 6];
let sumNb = 0;
const nbPair = numbers.filter((element) => element % 2 === 0);
console.log(nbPair);
let nbPairSum = 0;

for (i = 0; i < nbPair.length; i++) {
  i += nbPair[i];
  const nbPairSum = nbPair.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    sumNb
  );
  console.log(nbPairSum);
}

/**
 * 2 - Écris une fonction maxNumber(numbers) qui prend en entrée un tableau d'entiers numbers et retourne le plus grand nombre présent dans le tableau.
 */

const numbers2 = [12, 21, 67, 36, 49, 51];

// your code here
// function maxNumber(numbers)

console.log(Math.max(...numbers2));
