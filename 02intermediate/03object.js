// There are two common ways to create objects in JavaScript: using object literals and using constructor functions.

//singleton hamesha constructor  se banta hai literal se nahi banta:
//object.create() bhi ek tarika hai object banane ka singleton ke liye:

//object ke ander hum key:value pair rakhte hain:


//Object Literal:----


const personLiteral = {
    name: 'Alice',
    age: 30,
    email:'pk2366999@gmail.com',
    isLoggedIn: true,
    LastLoginDays:[ 'Monday', 'Friday']

}

console.log(personLiteral.email); // this is not the right way to access key
console.log(personLiteral['email']); // this is the right way to access key(this is called square bracket notation)


//freeze karna hai object ko to hum Object.freeze() ka use karte hain:
Object.freeze (personLiteral);
personLiteral.age = 35; // this will not change the age property because the object is frozen
console.log(personLiteral.age); // 30


// function in object:

