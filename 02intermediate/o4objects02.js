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