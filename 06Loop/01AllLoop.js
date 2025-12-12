// for of loop :-

["",""," "] //array in string 

[{},{},{},{}]// array in object 


const arr =[1,2,3,4,5,6]

for ( const num of arr){  // const ke baad new variable decalre kra hai or kisko action me lena hai us var ka naam arr 

    console.log(num*2);

}

//maps:---

const map = new Map()
map.set('IN','India')
map.set('USA','Unoted state of America')
map.set('FR','France')

console.log(map); // value are unique and data ese hi output dega jese aap doge ji 


// for in 

/*********************************************
 *            ⭐ for...in LOOP ⭐
 *********************************************/

/*
🔥 for...in loop kis ke liye use hota hai?
-------------------------------------------
➡️ Objects ke andar KEYS (property names) ko iterate karne ke liye.
➡️ Arrays me bhi use hota hai, lekin recommended nahi (kyunki order mess ho sakta hai).

Simple language me:
for...in = "Object ke keys ek-ek karke nikalne wala loop"
*/


/*
===============================================
1️⃣  Basic Syntax
===============================================
for (let key in object) {
    // yahan pe key milti hai
    // object[key] se value milti hai
}
*/


/*
===============================================
2️⃣  Example with OBJECT (BEST use case)
===============================================
*/
const user = {
    name: "Prince",
    age: 21,
    city: "Delhi"
};

for (let key in user) {
    console.log(key, ":", user[key]);
}

/*
Output:
name : Prince
age : 21
city : Delhi

Flow:
- Pehle "name" milega, fir "age", fir "city"
*/


/*
===============================================
3️⃣  Example: Object of Prices
===============================================
*/
const prices = {
    apple: 100,
    banana: 50,
    mango: 80
};

for (let item in prices) {
    console.log(`1kg ${item} = ₹${prices[item]}`);
}

/*
Output:
1kg apple = ₹100
1kg banana = ₹50
1kg mango = ₹80
*/


/*
===============================================
4️⃣  for...in with ARRAY (Not recommended)
===============================================
Kyun? Kyunki:
- keys = index aate hain
- kabhi-kabhi index order disturb ho sakta hai
*/
const fruits = ["apple", "banana", "orange"];

for (let index in fruits) {
    console.log(index, fruits[index]);
}

/*
Output:
0 apple
1 banana
2 orange
*/



/*
===============================================
5️⃣  for...in vs for...of (IMPORTANT)
===============================================

for...in  → keys deta hai (index/property name)
for...of  → values deta hai (actual item)

Example:
*/
for (let idx in fruits) {
    console.log("for in → index:", idx); // 0,1,2
}

for (let val of fruits) {
    console.log("for of → value:", val); // apple, banana, orange
}


/*
===============================================
6️⃣  When to use for...in?
===============================================

✔ Object ke keys nikalna ho  
✔ Object ke andar values access karni ho  
✔ Dynamic objects handle karne ho  

❌ Arrays ke liye best nahi  
❌ Maps/Sets ke liye bhi best nahi  
*/


/************************ END OF for...in NOTES *************************/


/*********************************************
 *      ⭐ HIGER ORDER FUNCTION (HOF) ⭐
 *********************************************

/*
🔥 Higher Order Function kya hota hai?
---------------------------------------
➡️ Jo function **dusre function ko parameter me le** ya  
➡️ **function ko return kare**  
Usko Higher Order Function bolte hain.

Simple line me:
"HOF = Function jo functions ko handle kare."
*/


/*
===============================================
1️⃣  Example: Function ko parameter me dena
===============================================
*/
function greet() {
    console.log("Hello Bhai!");
}

function callMe(fn) {   // yahan fn = ek function hai
    fn();               // function ko call kiya
}

callMe(greet); 

/*
✔️ callMe = Higher Order Function
✔️ kyunki ye ek function ko argument me accept karta hai
*/


/*
===============================================
2️⃣  Example: Function ko return karna
===============================================
*/
function outer() {
    return function inner() {
        console.log("Inner Function");
    };
}

const x = outer();
x();

/*
✔ outer = Higher Order Function*/
 

//For Each 

const coding =["js","ruby","java","python","cpp"]

coding.forEach(function (val){
    console.log(`${val} types of programming language `)
})   
     // yeh one by one sb pr jata hai