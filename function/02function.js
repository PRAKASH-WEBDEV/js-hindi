
//rest operator  

function calculatecartprice( var1,var2 , ...num1) {  
    return num1
}
console.log(calculatecartprice(100,200,300,400,500));// the output is [300,400,500] because rest operator stores the remaining values in an array


// the rest are return always array ...

const user ={
    username:"prince",
    age:23
}

function handleObject(anyobj){
    console.log(`Username is ${anyobj.username}  and the age is ${anyobj.age}okay`);


}
console.log(handleObject(user));// the return of this line is undefined ..




