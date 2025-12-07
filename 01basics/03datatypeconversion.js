let scoore =100 // the type of scoore is number
let age="21" // the type of age is string


console.timeLog(typeof scoore); // checking the type of scoore
console.log(typeof (scoore));// another way to check type
console.log(typeof age); // checking the type of age

// converting number to string
let scooreString= scoore.toString();

//cnverting string to number
let ageNumber= Number(age); // parseInt converts string to integer

console.log("Converted scoore to string:", scooreString, "Type:", typeof scooreString);
console.log("Converted age to number:", ageNumber, "Type:", typeof ageNumber); 


//"33"=>33
//"33abc"=>NaN
//"abc33"=>NaN
//"abc"=>NaN
//ture=>1
//false=>0

