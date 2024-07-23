// foreach
let students = [
    {
        name:"charan",
        age:431,
        address:{
            city:"kadapa",
            pincode:516411
        },
        marks:[99,98,97,100]
     },
     {
        name:"vishnu",
        age:91,
        address:{
            city:"tadipatri",
            pincode:516321
        },
        marks:[59,68,47,59]
     },
     {
        name:"usha",
        age:121,
        address:{
            city:"tpt",
            pincode:516500
        },
        marks:[34,83,17,50]
     },
     {
        name:"luffy",
        age:19,
        address:{
            city:"one piece",
            pincode:654321
        },
        marks:[5,8,9,1]
     }
]
// students.forEach((itr,ind)=>{
//     // console.log(itr.name,JSON.stringify(itr.age))
//     // console.log(itr,ind)
//     // console.log(itr.address.pincode)
//     if(ind == 0)
//         itr.marks.push(95)
//     if(ind == 1)
//         itr.marks.unshift(90)
//     if(ind == 2)                                                    //will effect the original array
//         itr.marks.splice(2,1,18)
//     if(ind == 3)
//         itr.marks.shift()
// })
// console.log(students)



// MAP MAP MAP MAP MAP MAP MAP 
let changed_array = students.map((itr,ind)=>{
    // console.log(itr.name,JSON.stringify(itr.age))
    // console.log(itr,ind)
    // console.log(itr.address.pincode)
    let itr1 = JSON.parse(JSON.stringify(itr))
    if(ind == 0)
        itr1.marks.push(95)
    if(ind == 1)
        itr1.marks.unshift(90)
    if(ind == 2)                                                    //will not effect the original array
        itr1.marks.splice(2,1,18)
    if(ind == 3)
        itr1.marks.shift()
    return itr1
})

console.log("new",changed_array)
console.log("old",students)