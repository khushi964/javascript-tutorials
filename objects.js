//singleton
//object.create
//object literals
const mysym = Symbol("key1")

const JSuser  = {
    name: "khushi" ,
    "full name " : "khushi yadav",
    age:  18 ,
    location: "jaipur",
    email:"khushi@gmail.com",
    isLoggedIn : false,
    lastLogindays : ["monday","saturday"],
    [mysym] : "key1"


} 
console.log(JSuser.email)
console.log(JSuser["email"])
console.log(JSuser["full name "])
console.log(JSuser[mysym])
JSuser.greeting = function(){
    console.log("hello user")
}
JSuser.greetingTwo = function(){
    console.log(`hello user ${this.name}`)
}
console.log(JSuser.greeting);
console.log(JSuser.greeting());
console.log(JSuser.greetingTwo())