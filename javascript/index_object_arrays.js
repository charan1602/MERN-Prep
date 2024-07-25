// objects

let strawhat1 = {
    name:"luffy",
    age:"21"
,   bounty:"300000000000"
}
let strawhat3 = {
    name:"sanji",
    age:"21"
,   bounty:"210000000000"
}
let strawhat2 = {
    name:"zoro",
    age:"22",
    bounty:"22000000000",
    "sword style":"3 sword style"      // key with space
}
console.log(strawhat1.bounty)
console.log(strawhat3.bounty)
console.log(strawhat2["sword style"])


// Arrays

let arr = [1,2,3,4,5,6,7]
console.log(arr[2])
// for(i=0;i<arr.length;i++){
//     console.log(arr[i])
// }
let element = 10                    //adding element to array at particular position
let index_to_be_added = 4
for(i=arr.length-1;i>=index_to_be_added;i--){
    if(i ==  index_to_be_added){
        arr[i+1] = arr[i]
     arr[index_to_be_added]  = element 
    } 
    else
     arr[i+1] = arr[i]
}
console.log(arr)
