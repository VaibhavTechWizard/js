
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    // console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
// handleObject({
//     username: "sam",
//     price: 399
// })

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200, 400, 500, 1000]));

// function calculateCartPrice(...num){  // ... => rest/spread
//     return num
// }
// console.log(calculateCartPrice(200,222,34));

// function calculateCartPrice(v1,v2,...num){
//     return num
// }
// console.log(calculateCartPrice(200,222,34,44));


// function handleObject(anyobject){
//     console.log(`username is ${anyobject.username} and price is ${anyobject.prices}`);
    
// }
// handleObject(user)

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.prices}`);
    
}
// handleObject(user)

handleObject({
    username:"sma",
    price:333

})

const myNewArra=[200,33,22,333]
function returnSecondVal(getArra){
 return getArra[1]
}
console.log(returnSecondVal(myNewArra));
