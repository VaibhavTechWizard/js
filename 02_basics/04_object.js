// const tinderUser = new Object()

const tinderUser={}
 tinderUser.id="123abc"
 tinderUser.name="Sammy"
 tinderUser.isLoggedIn=false
// console.log(tinderUser);

const regularUser ={
    email:"su@gmail.com",
    fullname:{
        userFullName:{
           firstName: "vaibhav",
           lastName:"Kumar"
        }
    }
}
// console.log(regularUser.fullname.userFullName.firstName);


const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj4 = {5:"a",6:"b"}
// const obj3 = { obj1 , obj2 }

// const obj3= Object.assign({},obj1,obj2,obj4)

const obj3={...obj1,...obj2}
// console.log(obj3);

const user = [
{
    id:1,
    email:"dfgvc@f"
},
{

},
{

},
]
user[1].user

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));//[ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

// console.log(tinderUser.hasOwnProperty('iLoggedIn'));


const course={
    price:"999",
    courseName:"js in hindi",
    courseInstrinctor:"histesh"

}
// course.courseInstrinctor
const{courseInstrinctor:ins}=course
console.log(ins);
console.log(course.courseInstrinctor);

// {
//     name:"vam",
//     courseName:"js in hindi",
//     price:"free"
// }
{
    {},
    {},
    {}
}