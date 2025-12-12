//Dom notes ist very important about all web dev concept:--

/*********************************************
 *                ⭐ DOM NOTES ⭐
 *********************************************

/*
🔥 DOM kya hota hai?
---------------------
DOM = Browser ne HTML ko ek tree structure me convert kar diya.
Har element → ek object ban jata hai (document ke andar).

Simple line:
"DOM = HTML ka JavaScript version."
*/


/*
===============================================
1️⃣  DOM Access Methods (Elements ko pakadna)
===============================================
document.getElementById("idName")
document.querySelector(".class / #id / tag")
document.querySelectorAll("selector")   // NodeList return karta hai
*/


/*
Example:
*/
const title = document.getElementById("mainHeading");
const btn = document.querySelector(".btn");
const items = document.querySelectorAll("li");


/*
===============================================
2️⃣  Text aur HTML change karna
===============================================
element.textContent = "New Text";
element.innerHTML = "<b>Bold Text</b>";
element.innerText = "Visible Text Only";
*/


/*
===============================================
3️⃣  Style change karna (CSS JS se)
===============================================
element.style.color = "red";
element.style.backgroundColor = "black";
element.style.fontSize = "20px";
*/


/*
===============================================
4️⃣  Attributes read/update
===============================================
element.getAttribute("src");
element.setAttribute("id", "newId");
*/


/*
===============================================
5️⃣  Class add/remove/toggle
===============================================
element.classList.add("active");
element.classList.remove("active");
element.classList.toggle("darkMode");
*/


/*
===============================================
6️⃣  Creating + Appending Elements
===============================================
*/
const div = document.createElement("div");
div.textContent = "Hello Bhai";
document.body.appendChild(div);

/*
appendChild → last me add
prepend → start me add
remove() → element delete
*/


/*
===============================================
7️⃣  Events (user interactions)
===============================================
element.addEventListener("click", function() {
    console.log("Button clicked!");
});

Common Events:
- click
- input
- change
- mouseover
- keydown
- submit
*/


/*
===============================================
8️⃣  Event Object (important)
event.target → kis element ne event kara
event.preventDefault() → form submit rukwana
*/


/*
===============================================
9️⃣  Small Example: Button click se text change
===============================================
*/
const btn2 = document.querySelector("#btn");
const para = document.querySelector("#text");

btn2.addEventListener("click", () => {
    para.textContent = "Text Changed 😎";
});


/**************** END OF SHORT DOM NOTES *****************/
