// closures
function getCounter(){
    let count = 0      //it is the closure variable because the anonymous function 
    return function(){
        return count = count + 1
    }
}
let counter = getCounter()
setTimeout(function(){
    console.log(1)
},5000)

console.log(3)


//arrow functions
// xyz()
// var xyz = () =>{
//     console.log("charan")
// }
abc()
function abc(){
    console.log("charan1")
}

//passing function as parameters to a function
function az(cb){
   cb()
}
function sx(){
    console.log("charan")
}
az(sx)

// HOC Higher Order Functions
function add(func){
     return () =>{
        let y =func(10)
        return y +30
     }
} 
function multiply(a){
    return a*2
}
function mod(b){
    return b%2
}
console.log(add(multiply)());
console.log(add(mod)());

// calling anonymous functions
((num)=>{
   console.log(num)
})(5)