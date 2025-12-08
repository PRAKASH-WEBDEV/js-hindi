const marvel_hero =["thor","ironman","captain america","black panther"];
const Dc_hero =["superman","batman","flash","aquaman"];

// marvel_hero.push(Dc_hero);// nested array

// console.log(marvel_hero); //bad way to express the join element of array 

const all_hero =marvel_hero.concat(Dc_hero); // it will merge two array

// console.log(all_hero);

// console.log(all_hero.flat());

//array.flat ( is very imp method to solved it very easy )


 let all_heroes= [...Dc_hero,...marvel_hero]; // spread operator ( ... )  it will also merge two array
 console.log(all_heroes);

console.log(typeof all_heroes); // object


//Array isArray method
console.log(Array.isArray(all_heroes)); // it will check the array or not and return boolean value
 //Array from method
 const name = "tony stark";
 const nameArray = Array.from(name);
console.log(nameArray); // it will convert string into array

//  Array of method
 const numArray = Array.of(1,2,3,4,5);
 console.log(numArray); // it will create array from the given elements
 