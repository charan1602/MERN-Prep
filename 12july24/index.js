// let age=100
// console.log(age)
// let a=20
// let b=10

// console.log(a+b)
// console.log(a-b)
// console.log(a/b)
// console.log(a*b)
// console.log(a**2)
// console.log(a>b)
// console.log(a<b)
// console.log(a++)
// console.log(a+b*(a-b))
// let number =  4
// if(number%2 == 0)
//    console.log(number ,"is an even number")
// else
//    console.log(number ,"is an odd number")
// let num = 7
// if(num>5 && num<9)
//     console.log(num ,"is present")
// else
//   console.log(num ,"is not present")
// let x = "h"
// let y = "f"
// if(x == "a" || x == "e" || x == "i" || x == "o" || x == "u"  )
//     console.log(x,"is a vowel")
// else if(y == "a" || y == "e" || y == "i" || y == "o" || y == "u" )
//     console.log(y,"is a vowel")
// else 
//     console.log("no vowels found")


    
// let num1 = 10
// if(num1 >= 1 && num1 <= 10)  
//     console.log("num1 is in range 1-10")  
// else if(num1 <=-10 && num1 >= -1)
//     console.log("num1 is in range -1 - -10") 
// else if(num1 >= 200 && num1 <= 300)
//     console.log("num1 is in range 200-300") 
// else 
// console.log("num1 not found in the range") 



// let sum=0
// for(let i=1;i<=10;i++){
//     sum=sum+i
// }
// console.log(sum)

// // even numbers
// for(i=1;i<=30;i++){
//     if(i%2 == 0){
//         console.log(i)
//     }
// }
// let character
// for(let i=97;i>=122;i++){
//     if( i == 97 || i == 101 || i == 105 || i == 111 || i == 117){
//         console.log(String.fromCharCode(i))
//     }
// }
// let str
// let str1 = ""
// str.toLowerCase()
// for(i=0;i<str.length;i++){
//     if(charCodeAt(i) >=97 && charCodeAt(i)<=122)

//         str1 = str1 +str[i]
// }
// let str1 = "the quick brown fox jumps over the lazy dog "
// let str2 =""
// let count = 0
// for(i=0;i<str1.length;i++){
//     for(j=i+1;j<str1.length;j++){
//        if(str1[i] == str1[j])
//        {
//         count++
//        }
//     }
//     if(count == 0)
//        str2 = str2 +str1[i]
// }
// if(str2.length == 27)
//     console.log("it is panagram")
// else
//     console.log("it is not a panagram")
// let str1 ="the quick brown fox jumps over the lazy dog"
// let char
// str1.toLowerCase()
// // let str2 =""
// count =0
// for(let i=0;i<str1.length;i++){
//     char = String.fromCharCode(i)
//     if(str1.indexOf(char) != -1)
//     {
//         count++
//     }
// }
// function mathcal(a,b){     //here a,b are called arguments  impure function
//     // let a = 10 
//     // let b = 20
//     let sum = a+b 
//     let multi = a*b
//     let sub = b-a
//     let div = b/a
//     console.log(sum)
//     console.log(multi)
//     console.log(div)
//     console.log(sub)
// }
// mathcal(10,20)     //here a,b are called parameters
// function sum(a,b){
//    console.log(a+b)
// }
// function multi(a,b){
//     console.log(a*b)
//  }
//  function sub(a,b){
//     console.log(a-b)
//  }
//  function div(a,b){
//     console.log(a/b)
//  }
//  sum(10,20)
 function sub_string(){
    let input = "charan kumar reddy"
    // let j
    let start=0
    let end = 0
    for( let j=0; j<input.length;j++){
        
         if(input.charCodeAt(input[j]) != 32) 
         {
            end++
         }
         else{
            console.log(input.substring(start,end+1))
            start = start + end+1
         }
    }
 }
sub_string()