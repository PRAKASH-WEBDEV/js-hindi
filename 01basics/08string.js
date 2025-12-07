  const name ="prince"
  const reponumber = 50

console.log("my name is "+ name + "and I have completed  " + reponumber + "repositiories");

//but this is not a right way to do this

//using string String Interpolation:-String Interpolation ka matlab hota hai string ke andar directly variables ya expressions ko embed (insert) karna without using + concatenation.

console.log(`my name is ${name} and I have completed ${reponumber} repositiories`);

// string of method :----

console.log(name.length); // length of string
console.log(name.toUpperCase()); // to convert string to uppercase
console.log(name.toLowerCase()); // to convert string to lowercase
console.log(name.charAt(2));// to check char which position 
console.log(name.indexOf("p"));// to check index of char

let newstr=" prince  ";
console.log(newstr.trim());// to remove extra spaces from string


