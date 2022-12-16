const numbers = process.argv.slice(2);  //starts at index 2 and everything else afterwards in array.

const result = numbers.reduce((acc, num) => {   //adds up sum of numbers in const array using 'reduce'.
    return acc + Number(num);   //returns sum of current accumulator and number.
}, 0);  //accumulator set to 0.

console.log(result);