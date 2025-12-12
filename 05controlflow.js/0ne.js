// if else .. 

//if(condition){


//  }

const isUserLoggedIn= true;

if (isUserLoggedIn){
    console.log('login hu badwe')
}
else{
    console.log('login de mdrchod')
}


/**********************************************
 *        ⭐ JAVASCRIPT CONTROL FLOW ⭐
 **********************************************/

/*
🔥 Control Flow kya hota hai?
--------------------------------
Control Flow = JS code ka execution kis order me chalega.
Default → Top to Bottom run hota hai.

But conditions, loops, functions, breaks, returns,
flow ko change kar denge.
*/


/*
===============================================
1️⃣  SEQUENTIAL FLOW (Normal Flow)
===============================================
By default JS line-by-line top se bottom execute karta hai.

Example:
*/
console.log("Line 1");
console.log("Line 2");
console.log("Line 3");

/*
Output:
Line 1
Line 2
Line 3
*/


/*
===============================================
2️⃣  CONDITIONAL FLOW (if / else / else-if)
===============================================
Agar condition true ho → code chalega,
nahi to else chalega.
*/
let age = 18;

if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Not Adult");
}

/*
Flow:
– Condition check
– True → first block
– False → else block
*/


/*
===============================================
3️⃣  MULTI-CONDITION FLOW (else-if)
===============================================
*/
let marks = 75;

if (marks >= 90) {
    console.log("A Grade");
} else if (marks >= 70) {
    console.log("B Grade");
} else {
    console.log("C Grade");
}

/*
Flow:
– First condition false → next wali check
– Jab tak TRUE na mile, flow neeche jata rahega
*/


/*
===============================================
4️⃣  SWITCH CASE (Multiple Choice)
===============================================
Useful jab same variable ke multiple cases check karne ho.
*/
let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    default:
        console.log("Unknown Day");
}

/*
⚠️ break zaroor lagana warna next case bhi execute ho jayega.
*/


/*
===============================================
5️⃣  LOOPS FLOW (repeat execution)
===============================================
1. for
2. while
3. do-while
4. for-of / for-in
*/


/*
⭐ FOR LOOP — fixed count repeat
*/
for (let i = 1; i <= 5; i++) {
    console.log("Hello", i);
}

/*
Flow:
– i=1 se start
– Condition check
– Code execute
– i++ increment
– Repeat until condition false
*/


/*
⭐ WHILE LOOP — jab tak condition true
*/
let num = 1;

while (num <= 3) {
    console.log("Num =", num);
    num++;
}

/*
Agar condition false ho → ek baar bhi run nahi hota.
*/


/*
⭐ DO-WHILE — pehle run, baad me condition check
*/
let x = 5;

do {
    console.log("Value:", x);
    x++;
} while (x < 3);

/*
Isme code ek baar zaroor execute hota hai.
*/


/*
===============================================
6️⃣  BREAK and CONTINUE (Flow control)
===============================================
*/

/* break → loop ko turant rok deta hai */
for (let i = 1; i <= 5; i++) {
    if (i === 3) break;
    console.log("i =", i);
}

/*
Output:
1
2
*/



/* continue → us iteration ko skip kar deta hai */
for (let i = 1; i <= 5; i++) {
    if (i === 3) continue;
    console.log("i =", i);
}

/*
Output:
1
2
4
5
*/


/*
===============================================
7️⃣  RETURN (Flow ko function se bahar nikalta hai)
===============================================
*/
function test(num) {
    if (num < 0) return "Negative number"; // yahin se function end ho jayega
    return "Positive number";
}

console.log(test(5));
console.log(test(-2));


/*********************** END OF CONTROL FLOW NOTES ***********************/
