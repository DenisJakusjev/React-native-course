//Using ()=> in a object rebinds "this" to a global scope, so to dodge this problem , we simply restructure function to great(){} instead of great:()=>{} so this keeps localy

const person = {
    name:"Denis",
    age:25,
    great(){
        console.log("Hi I am " + this.name)
    },
}
//4 types of loops
const hob=["Sports", "Lol","WoW"];

// for (let hobby of hob){
//     console.log(hobby)
// }
//Map создает новый Array из старого + можно дабавить или переделать под что-то новое
// console.log(hob.map((obj)=>{return obj}))


//Rest and spread
//spread - takes array or objects and pulls out all elements or properties and puts to whatever is around spread
const copieHob = [...hob]
const copiePers = {...person};
// console.log(copieHob)
// console.log(copiePers)

//Undependant of how many arguments we gona pass in "...args" will create a array with all of them.
const toArray =(...args)=>{
    //Creates an array with all args
 return args
}

//Destructuring
//If we pass in an object ({}) will allow us to drop all other propertys that object has and only store the name
//instead of taking all object store it localy and 
const printName =({name})=>{
    console.log(name)
}
printName(person);

//and we can drag out properties to a variables
//Props has to be exact
const {name,age} = person
console.log(name , age)

//Destruct array
//Names are random - they are extracted by position
let [hobbie1,hobbie2] = hob
console.log(hobbie1,hobbie2)