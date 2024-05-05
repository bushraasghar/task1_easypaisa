import chalk from 'chalk'

// 1) String Equality and Inequality: 
// Check if two given strings are equal or not.
// Ensure there is one test that should return True and another that should return False.
console.log(chalk.bold.black("\n\t string equality test \t\n"));

let word1: string = "Heaven"
let word2: string = "Hell"
console.log(chalk.red("Heaven is equal to hell"));

console.log( word1 === word2);
console.log(chalk.green("Heaven is not equal to Hell"));

console.log( word1 !== word2);



// 2) Using Lowercase Function: 
// Convert a given string to lowercase and compare it with another lowercase string.
// Write at least one test that should return True and another that should return False.
console.log(chalk.bold.black("\n\t using lowercase function \t\n"));

let fullName: string = "daffodils";

console.log(fullName.toLowerCase() ==="daffodils");

    console.log(chalk.green("daffodils"));        //true
    

console.log(fullName.toLowerCase() === "DAFFODIL")
    console.log(chalk.red("DAFFODIL"));

    
// 3) Numerical Comparisons: 
// Perform equality and inequality checks on given numbers.
// Include tests to check if one number is greater than, less than, greater than or equal to, and less than or equal to another.
// At least one test should yield a True result and another should yield False.

console.log(chalk.bold.black("\n\t Numerical comparisons \t\n"));
console.log("Greater than test");


let counting1: number = 20
let counting2: number = 10
console.log("20 is > 10");

console.log(counting1 > counting2)

console.log("10 is > 20");

console.log(counting2 > counting1)
    
console.log("less than test");

console.log("20 < 10");
console.log(counting1 < counting2)
    
console.log("10 < 20");   
console.log (counting2 < counting1) 
    
    console.log("20 is equal to 10");
    
console.log(counting1 == counting2);
console.log("20 is not equal to 10");

console.log(counting1 !== counting2);

// 4) Logical Operators :
// Test with logical "and" to ensure two conditions are both true.
// Test with logical "or" to ensure at least one condition is true.
// Ensure you have tests that return both True and False.
console.log(chalk.bold.black("\n\t Logical operators test\t\n"));


let language1 = "typescript"
let language2 = "pythone"

if(language1 == language2 && language2 !== language1) {
    console.log(chalk.green("that is true condition "));
}else{
    console.log(chalk.red("that is false condition"));
    
}

if (language1 == language2 || language1 !== language2) {
    console.log(chalk.green("that is true condition"));
    
} else {
    console.log(chalk.red("that is false condition"));
    
}


// 5) Checking Items in an Array: 
// Given an array of items, test if a specific item is in the array.
// Have one test that should return True and another that should return False.
console.log(chalk.bold.black("\n\tchecking item in array test\t\n"));

let planets = ['Mercury', 'Venus']
if (planets.includes  ('Mercury')) {
    console.log(chalk.green("True! this planet is in array"));
    
} else {
    console.log("False! this planet is not in array");
    
}
if(planets.includes ('mars')) {
    console.log("True! this planet is in array");
    
} else {
    console.log(chalk.red("False! this planet is not in array"));
}

// 6) Checking Items Not in an Array: 
// Test if a specific item is not in a given array.
// Include one test returning True and one returning False.
console.log(chalk.bold.black("\n\tchecking item is not in array\t\n"));

let palnet = ['jupiter','saturn']
if (palnet.includes('earth')) {
    console.log("true is planet is not is array");
    
} else {
    console.log(chalk.red("false this planet in array"));
    
}
if (palnet.includes('sun')) {
    console.log('false this planet is not in array');
    
} else {
console.log(chalk.green('true this planet is not in array'));
    
}
