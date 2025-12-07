//Date is a lib is included in node by default

let mydate =new Date() // current date and time
console.log("Current Date and Time:", mydate.toString());// converting date to string
console.log("Year:", mydate.getFullYear()); // getting year
console.log(mydate.toLocaleString()); // getting date and time in local format
console.log(typeof mydate); // checking type of date object