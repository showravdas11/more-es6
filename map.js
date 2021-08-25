const numbers = [4, 6, 8, 10];
const output2 = [];

// function doubleOld(number) {
//     return number * 2;
// }

const doubleIt = number => number * 2;

for (const number of numbers) {
    const result = doubleIt(number)
    output2.push(result);
}
// console.log(output2);

//loop
// element diya function k call korchi
// result ekta array er moddhe push korci

const output = numbers.map(doubleIt);
// console.log(output);

const squares = numbers.map(x => x * x)
console.log(squares);