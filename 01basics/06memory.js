// stack (primitive )
//Heap( Non-prinitive)

/* Primitive datatype stack memory mein store hota hai
 jaise ki string, number, boolean, null, undefined, symbol ,BigInt
    Non-primitive datatype heap memory mein store hota hai
    jaise ki objects, arrays, functions*/


let name="prince"// string datatype define with single quotes or double quotes "" ,''
let naam =name // yaha pe name variable ki value change ho gayi hai
naam="rohit" // yaha pe naam variable
console.log("Name:", name);//prince
console.log("Naam:", naam);//rohit

//yerha pe name variable ki value change nahi hui hai kyuki string primitive datatype hai aur stack memory mein store hota hai isliye yaha pe alag alag memory allocate hoti hai dono variable ke liye jisko hum bolte hai copy by value

let student1={
    name:"prince",
    age:21
}
let student2=student1 // yaha pe student1 variable ki value change ho gayi hai
student2.name="rohit" // yaha pe student2 variable
console.log("Student1 Name:", student1.name);//rohit

//heap memory me refernece dono ka same hota hai isliye dono variable ki value change ho gayi hai jisko hum bolte hai copy by reference