//Singleton=>Construtor

// Object Literals

const mySym=Symbol("key1")

const JsUser={
    name:"vaibhav",
    "full name":"Vaibhav",
    [mySym] :"mykey1",
    age:19,
    location:"kalka",
    email:"vaibhav@123",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);

// console.log(JsUser[mySym]);

// console.log(typeof mySym);

// myArray=["f","s"]

JsUser.email="vaibhav!chatgpt.com"
// Object.freeze(JsUser)
JsUser.email="vaibhavmice.com"
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("hello js user");
}
JsUser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
