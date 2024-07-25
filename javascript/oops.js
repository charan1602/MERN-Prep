// let sum = (a,b)=>{
//     let  result
//     return ()=>{
//         result =  a+b
//         return result}}
// console.log(sum(3,4)())
let sumoftwo =()=>{
    let cache = {}
    return (a,b)=>{
          let str = a.toString()+b.toString()
          if(cache[str])
            return cache[str]
          let result = a+b
          cache[str] = result
          return result
    }
}
let container = sumoftwo()
console.log(container(1,2))