let person = {name:"hemanth"}
console.log(person.__proto__)  //points to perrsons prototype

function person1(name){
    this.name = name
}
let charan = new person1("charan")
console.log(charan)
console.log(charan.__proto__===Object.__proto__)

function Animal(name,eats){
    this.eats = eats
    this.name = name
}
let Dog = new Animal("dog",true)
console.log(Dog)
Animal.prototype.walks = function(){
    console.log(`${this.name}${this.eats? " will eat" : "will not eat"} `)
}
Dog.walks()

function Father(){}
function Mother(name){
    this.name = name
}
Mother.prototype = Object.create(Father.prototype) 
let dog = new Mother("gfdfds")
Father.prototype.speak = true
console.log(dog.speak)
console.log(Mother.__proto__)
console.log(dog.__proto__)
console.log(dog.prototype)
console.log(Mother.__proto__ == dog.__proto__)