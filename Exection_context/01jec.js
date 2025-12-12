//JEC =- javascript execution Context  :

// how to run js file  or how js execute the file is known as js jec 

//mainely there are 2 phases in jec 


//1. Global EC :- Refer krta hai THIS isko
//2. Function EC :-


/***********************************************
 *      ⭐ JAVASCRIPT EXECUTION CONTEXT (HINGLISH) ⭐
 ***********************************************/

/*
🔥 Execution Context kya hota hai?
-----------------------------------
Ye wo jagah (environment) hota hai jahan JS code run hota hai.
Matlab JS ka brain → code ko kaise read, store, execute karega.
*/


/*
===============================================
1️⃣  TYPES OF EXECUTION CONTEXT
===============================================

1. Global Execution Context (GEC)
   → Pure JS file start hote hi banta hai.
   → window / global object create hota hai.
   → this = window (browser me).

2. Function Execution Context (FEC)
   → Jab bhi koi function CALL hota hai, ek naya box (context) ban jata hai.

3. Eval Execution Context
   → eval() ke andar code run karne pe banta hai (rare).
*/


/*
===============================================
2️⃣  EXECUTION CONTEXT BANTA KAISE HAI?
===============================================
Har execution context 2 phases me banta hai:

-----------------------------------------------
🔹 (A) Creation Phase — MEMORY SETUP
-----------------------------------------------
- Variables ko memory milti hai but value = undefined
- Functions ka pura code store ho jata hai
- this keyword set hota hai
- Environment ready ho jata hai

-----------------------------------------------
🔹 (B) Execution Phase — CODE RUNNING
-----------------------------------------------
- Line by line code execute hota hai
- Variables ko actual values milti hain
- Functions run hote hain
*/


/*
===============================================
3️⃣  GLOBAL EXECUTION CONTEXT (GEC)
===============================================
– Sabse pehla execution context
– Iske bina kuch execute nahi hota

GEC me hota kya hai?
- window object create
- this set hota hai
- variables ko undefined milta
- functions memory me store hote
*/


/*
===============================================
4️⃣  FUNCTION EXECUTION CONTEXT (FEC)
===============================================
Jab function call hota hai → NEW execution context banta hai.

Isme bhi 2 phases:

🔸 (A) Creation Phase
    - arguments object create hota hai
    - local variables ko undefined milta hai
    - function ke andar ke functions hoist hote hain

🔸 (B) Execution Phase
    - function ka actual code run hota hai
*/


/*
===============================================
5️⃣  EXECUTION CONTEXT ke 2 main parts
===============================================

1️⃣ Memory Component (Variable Environment)
   → Sare variables + functions yahan store hote hain.
   → Values undefined ho sakti hai (creation phase me).

2️⃣ Code Component (Thread of Execution)
   → Jahan actual code line-by-line run hota hai.
*/


/*
===============================================
6️⃣  CALL STACK (Execution Stack)
===============================================
Call Stack = Stack jahan sab execution contexts upar-upar stack hote hain.

Flow:
- GEC push hota hai (sabse pehle)
- Function call → FEC push hota
- Function complete → FEC pop hota
- End me sirf GEC bachta hai → wo bhi pop → program finish
*/


/*
===============================================
7️⃣  HOISTING — MOST IMPORTANT
===============================================
Creation phase me hota hai:

var → memory milti hai BUT undefined hota hai  
let/const → memory milti hai BUT TDZ (Temporal Dead Zone) me rehte hain  
function declarations → poora function upar lift ho jata hai  
*/


/*
===============================================
8️⃣  Easy Example (samajhne ke liye BEST)
===============================================

console.log(a);   // ❗Output: undefined (var hoisted)
var a = 10;

function sum() {
    var b = 20;
    return a + b;
}

sum();

Execution Flow:
- GEC created → 'a' ko undefined, 'sum' store
- Line by line run → a=10
- sum() call → FEC create
- b allocate → return hota
- FEC destroy
- Program finish
*/

/*********************** END OF SIMPLE NOTES ************************/

