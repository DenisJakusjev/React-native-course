let name = "Max";
let age = 29;
let bool = true;


const sum2User = (userName, userAge, userBool) => {
    return "Name is " + userName + " age is " + userAge + " userBool " + userBool
}


function sumUser(userName, userAge, userBool) {
    return "Name is " + userName + " age is " + userAge + " userBool " + userBool
}
console.log(sum2User(name, age, bool))


//quick catch up on call bind etc
//Call не передает this если он используеться с arrow function
let callFunc = function (word) {
    console.log(word + this.a + " " + this.b)
}

let obj = {
    a: 1,
    b: 2
}

callFunc.call(obj, "DanuNahuj")
