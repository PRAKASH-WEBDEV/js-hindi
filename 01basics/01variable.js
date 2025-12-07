console.log("This is a test file.");

const prince=   "mahak"
var  age=  21

let city=   "New York"

// console.log(prince);
// console.log(age);
// console.log(city);

// prince ="mahak" // This will cause an error because 'prince' is declared with const

age= 22 // This is valid, 'age' is declared with var
city= "Los Angeles" // This is valid, 'city' is declared with let


/* prefer using var because of issues in block scope and functional scope */

console.table([prince, age, city]); // you can use console.table to display data in a table format