//array 
//in array are resizeable and can contain multiple data types
//array are zero indexed
//in array when we use copy operator it create a shallow copy
/*Shallow copy me:

Original array ke elements ke references copy hote hain, actual values nahi.

Agar element primitive ho (number, string, boolean) → copy alag hoti hai.

Agar element object/array ho → reference same hota hai.

Isliye agar hum new array me change karein, toh woh original array ko affect karta hai (only for object-type elements).*/


/*Deep copy me:

Original array/object ke actual elements copy hote hain, reference nahi.

Saare nested objects/arrays ka bhi new copy banta hai.

Isliye new copy me koi change karo, toh original array bilkul affect nahi hota.*/



const arr =[1,2,3,4,5]// thie is a element of array
const arr2 = new Array(6,7,8,9,10) // this is also an array


//Array Methods:----

arr.push(6) // add element at the end
console.log('After push:', arr);
arr.pop() // remove element from the end
console.log('After pop:', arr);
arr.unshift(0) // add element at the beginning
console.log('After unshift:', arr);
arr.shift() // remove element from the beginning
console.log('After shift:', arr);
const index = arr.indexOf(3) // find index of element
console.log('Index of 3:', index);
const ayy=arr.join('-') // join elements into a string
console.log('Joined string:', ayy);
console.log(typeof ayy); //its string 