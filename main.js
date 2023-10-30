let myName = 'Gina';

let myAge = 33;
// current age

let earlyYears = 2 * 10.5;
// variable can change, beginning years of dogs life

let laterYears = (myAge - 2) * 4;
// years less the early years times accelerated aging

// console.log(earlyYears);
// console.log(laterYears);

let myAgeInDogYears = earlyYears + laterYears;
// full calculation to age in dog years

console.log(`My name is ${myName}. I am ${myAge} years old in human years, which is ${myAgeInDogYears} years old in dog years.`);
// this console log will return the sentence, "My name is Gina. I am 33 years old in human years. which is 145 years old in dog years."
