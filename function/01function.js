// function mahakname() {  
//     console.log("Mahak");
//     console.log("Mahak Singh");
//     console.log("Mahak Singh prince");
//     console.log("Mahak Singh prince kumar");
    
    
    
// }
// mahakname();// this is function declaration and function call


function patnerName(firstName , lastName) { //parameter
    console.log("My Patner name is " + firstName + " " + lastName);
}
patnerName("Mahak" , "Singh");// function with parameter and argument


function addTwoNumbers(num1 , num2) {
    console.log( num1 + num2);
    // return num1 + num2;
}
const sum = addTwoNumbers(5 , 10);
console.log("The sum is " + sum);// function with return statement not consoleing inside function

function greetingMsg(name) {    
    return `${name}, welcome to the JavaScript world!`;
}

greetingMsg("Mahak Singh");// function with template literals(this value is not printed because we are not consoleing it we can only return it)

console.log(greetingMsg("Mahak Singh"));// now it is printed because we are consoleing the function call