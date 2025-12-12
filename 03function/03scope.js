// it is a very imp topic ..for hadle the function and scope 

let a = 10

if( true ){
 
 const b=20
 var c= 30
} // yeh jo curley braces hai voh hai scope or ..isko hum bolte hai BLOCK SCOPE  or iske bahar jo likhnete hai voh hai global scope 

//  console.log(a)
//  console.log(b)
 console.log(c)

 {}// it is a curley braces 

 //var jo hai usko bahut kam use krte hai kyuki yeh scope ke bahar or ander dono jagaha access ho sakta hai .


 //nested scope .......................

 function one(){
    const username="prince"

    function two(){
        const website= "google"

        console.log(username);
    }

    // console.log(website)

    two()
 } 
 one()  //Closure wo feature hota hai jisme ek inner function apne outer function ke variables ko yaad rakhta hai—even after the outer function has finished executing.

 const addtwo = function(num){
     return num +2;
 }

  console.log(addtwo(5));
