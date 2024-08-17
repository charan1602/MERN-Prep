// let myStorage = Window.localStorage
let obj = {
    name:"charan",age:22
}
let obj2 = {
    name:"tharun",age:20
}
localStorage.setItem("details1",JSON.stringify(obj2))

localStorage.setItem("details",JSON.stringify(obj))
let person = JSON.parse(localStorage.getItem("details"))
let person1 = JSON.parse(localStorage.getItem("details1"))

// console.log(person)
let cont = document.getElementById("cont")
cont.innerHTML = `
    ${person.name}
    ${person.age
    }
    ${person1.name}
    ${person1.age}
`
// localStorage.clear()