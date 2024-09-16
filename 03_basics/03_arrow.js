// const user = {
//     username: "vaibhav",
//     price:999,

//     welcomeMessage:function(){
//         console.log(`${this.username} ,Welcome to website`);
//         console.log(this);
        
//     }
// }
// //this refers to current context user\
// // user.welcomeMessage()
// // user.username="sam"
// // user.welcomeMessage()
// console.log(this);


// function cahi(){
//     let username="vaibhav"
//     console.log(this.username)
// }
// cahi()

// const chai =function(){
//     let username="hitesh"
//     console.log(this.username);
    
// }
// chai()


// const chai =()=>{
//     let username="hitesh"
//     console.log(this );
    
// }
// chai()

// const addTwo =(n1,n2)=>    (n1+n2)

const addTwo =(n1,n2)=>   ({username: "hitesh"})

console.log(addTwo(3,4));