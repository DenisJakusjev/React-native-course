
let fetchData = () => {
    //Creating a promise, takes two arguments resolve and reject
    //Promise is returned instatly but will ASYNC change the value when our time hits
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Done")
        }, 1500)
    });
    return promise;
};
//Now with promise we can use nested functions like then
//and if we want to build a chain of promises, we return fetchData again and having a new .then
setTimeout(() => {
    fetchData().then(done => {
        console.log(done)
        return fetchData();
    })
        .then(text2 => {
            console.log(text2)
        })
}, 2000)
//Sync code - they will go after eachother (EventLoop)
// console.log("Hello")
// console.log("Hi")