// arrow function and this keyword :---

const user ={
    username:"prakash",
    price:99,

    welcomeMessage:function(){
        console.log(`${this.username}, welcome to website `)
    }

}

//arrow function ke this nhi hota 
// this . current context ko reffer krta hai ..