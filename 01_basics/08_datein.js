//Date

// let myDate=new Date()
// console.log(myDate.toString());          //Sun Sep 15 2024 06:17:20 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString());      //Sun Sep 15 2024
// console.log(myDate.toLocaleDateString());//9/15/2024
// console.log(myDate.toTimeString());      //06:17:20 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toJSON());            //2024-09-15T06:17:20.862Z
// console.log(myDate.toISOString());       //2024-09-15T06:17:20.862Z

// let myCreatedDate=new Date(2023,0,23)
// let myCreatedDate=new Date(2023,0,23,3,4)

// console.log(myCreatedDate);
// console.log(myCreatedDate.toLocaleString());

// let myTimeSpan=Date.now()
// console.log(myTimeSpan);
// console.log(myCreatedDate.getTime());

let newDate=new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday:"long"
})