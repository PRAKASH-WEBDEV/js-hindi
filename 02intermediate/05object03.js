//hum kisi bhi value ko destructuring karke alag alag variables me store kar sakte hain

const person = {
    name: "John",
    age: 30,
    address: {
        street: "123 Main St",
        city: "New York",
        country: "USA"
    }
};  

const { name, age, address: { street, city, country } } = person;//yaha pr humne object ke andar ke object ko bhi destructure kar liya

console.log(city); // Output: John