const regularUser = {
  email: "pk234844@gamil.com",
  fullname: {
    userfullName: {
      firstName: "John",
      lastName: "Doe",
    },
  },
};

console.log(regularUser.fullname.userfullName.firstName); // Output: John
console.log(regularUser.fullname.userfullName.lastName);  // Output: Doe

//object assing method
const obj1 = { a: 1 };
const obj2 = { b: 2 };
const obj3 = { c: 3 };  

const mergedObject = Object.assign({}, obj1, obj2, obj3);
console.log(mergedObject); // Output: { a: 1, b: 2, c: 3 }

//object keys method
const sampleObject = { x: 10, y: 20, z: 30 };
const keys = Object.keys(sampleObject);
console.log(keys); // Output: [ 'x', 'y', 'z' ]
console.log(typeof keys); // Output: object