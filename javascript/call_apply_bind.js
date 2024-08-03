// let person = {
//     greet(){
//         console.log(`hi ${this.name},`)
//     }
// }
// let charan ={
//     name:"charan"
// }
// person.greet.call(charan)

let olddata = {
    name:"charan",
    age:21,
    gender:"male",
    addrerss:{
        pincode:543212,
        landmark:["kapra","jntu"]
    },
    occupation:"trainee"
}
let newdata = {
    name:"charan reddy",
    age:22,
    gender:"male",
    addrerss:{
        pincode:543242,
        landmark:["kapra","jntu","kphb"]
    },
    emailID:"charanreddy@gmaoil.com"
}
let updatedData = {}
for(let prop in olddata,newdata){
    // if(!olddata[prop] )
    //     updatedData[prop]=olddata[prop]

    if(olddata[prop]==newdata[prop]){
        updatedData[prop] = newdata[prop]
    }
    else{
        updatedData[prop]=newdata[prop]
    }
}
//  let arr = Object.keys(updatedData)
// // console.log(arr)
// let arr1 =[...new Set([...Object.keys(olddata),...Object.keys(newdata)]) ] 
// console.log(arr1)

let arr = [4,90,20,45,87,3,2,56]
let k =4
let low = 0
let high = low + k-1
let max = 0
function maxSub(low,high){
    if(high>arr.length-1){
        return max
    }
    sum =0
    for(let i =low;i<=high;i++){
        sum = sum + arr[i]
    }
    if(sum >=max)
        max = sum
   return maxSub(low+1,high+1)
}

console.log(maxSub(low,high))
// let i = 0
// for(let i = 0;i<k;i++){
//     sum = sum + arr[i]
// }

// while(i<=arr.length){
   
// }