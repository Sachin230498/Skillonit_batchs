// function Animal(name){
//     this.name = name
//     this.eat = function(){
//         console.log(this.name + " is eating")
//     }
//     }

// let a =  new Animal("Lion")
// a.eat()

// function Animal(name) {
//   this.name = name;

// }

// Animal.prototype.eat = function(){
//     console.log(this.name + " is eating")
// }


// let a1 =new Animal("lion")
// a1.eat()

// function Dog(breed){
//     this.breed = breed
//     Animal.call(this,name)
// }

// let d1 = new Dog("Labrador")
// console.log(d1)


// Inheritance
// Prototype




    let emp_data = {
    "office":"Skillonit",
    "designation":"Developer",
    "Salary":100000,
    "address":"Buldhana"
    }


    let emp1 = Object.create(emp_data)
    let emp2 = Object.create(emp_data)
    let emp3 = Object.create(emp_data)

    emp1.name= "Gaurav"
    emp2.name= "Aakash"
    emp3.name= "Raj"

    console.log(emp1)
    console.log(emp2)
    console.log(emp3)




let parent = {
    "Cash":"10cr",
    "Home":2,
    "Car":1
}


let child1 = Object.create(parent)
child1.property = "5cr"


// console.log(child1.Cash)

