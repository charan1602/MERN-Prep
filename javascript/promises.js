// function squareroot(){
//     let result
//     let sum = 0
//     for(let i = 1;i<10;i++){
//        if(i%2 == 0){
//         sum = sum + i
//        }
//         result = result**1/2
//     }
//     return result
// }
// console.log(squareroot())


// function sqrt_sum_even(limit,cb1,cb2){
//     let evenArr = []
//     for(let i =1;i<limit*2;i++){
//         if(i%2 == 0)
//     }
// }
// sqrt_sum_even(5,sum_even_nums,sqrt_sum)

// function mypromise(student){
//     return new Promise((resolve,reject)=>{
//         if(student.marks>35){
//             resolve(`${student.name} is passed`)
//         }
//         else{
//             reject( `${student.name} is failed`)
//         }
//     })
// }
// mypromise({name:"hemanth",marks:30}).then((result)=>{
//     console.log(result)
// }).catch((result)=>{
//     console.log(result)
// })
// mypromise({name:"charan",marks:50}).then((result)=>{
//     console.log(result)
// }).catch((result)=>{
//     console.log(result)
// })

let promise1 = new Promise((resolve,reject)=>{
    setTimeout(function() {
        resolve("promise1 is resolved")
    },2000)
})
let promise2 = new Promise((resolve,reject)=>{
    setTimeout(function() {
        reject("promise2 is rejected")
    },300)
})
let promise3 = new Promise((resolve,reject)=>{
    setTimeout(function() {
        reject("promise3 is rejecgted")
    },500)
})
// console.log(typeof(promise1))
// Promise.all([promise1,promise2,promise3]).then((result)=>{
//     console.log(result)
// }).catch((result)=>{
//     console.log(result)
// })
Promise.allSettled([promise1,promise2,promise3]).then((result)=>{
    console.log(result)
}).catch((result)=>{
    console.log(result)
})
// Promise.race([promise1,promise2,promise3]).then((result)=>{
//     console.log(result)
// }).catch((result)=>{
//     console.log(result)
// })
// const asyncFunc = (shouldReject) => {
//     return new Promise((resolve, reject) => {
//         if (shouldReject) {
//             reject("promise has been rejected");
//         } else {
//             resolve("First promise resolved");
//         }
//     })};

// Usage example:
// asyncFunc(false)
//     // .then((result) => {
//     //     console.log(result); // Output: "First promise resolved and hello my name is charan"
//     //     return result; // Pass the result to the next .then
//     // })
//     .then((result) => {
//         console.log(result);
//         return new Promise((res,rej)=>{
//             res([result,"second promise"])
//         })
        
//         // Output: "First promise resolved and hello my name is charan"
//     })
//     .then(data=>console.log(data,"caught yaaa"))
    
//     .catch((error) => {
//         console.log(error);
//     });


