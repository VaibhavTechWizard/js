//array
 
// const myArr=[0,1,2,3,4,5,6,7]


// console.log(myArr[0]);

// //Array method

// myArr.push(8)
// console.log(myArr);
// console.log(myArr,pop());

// // join=>converts array into string
//include=>if elemnts found return true else false

//splice=> Print with starting index and end both includes
//          Original array also changes

//slice => Print with only start index end index not included
//           Original array remains same

const arr1=[1,2,3,4,5]
console.log("A",arr1);

const my1=arr1.slice(1,3)

console.log(my1);
console.log("B",arr1);

const my2=arr1.splice(1,3);
console.log(my1);
console.log("mew",arr1);

console.log(my2);
