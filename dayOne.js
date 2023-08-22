// Assignment 1 : Array Operations

// Creating an empty array called fruits
let fruits = [];

// Adding elements in fruits array
fruits[0] = "apple";
fruits[1] = "banana";
fruits[2] = "orange";

//Removing first fruit from array
fruits.splice(0,1)

//Adding grape in the end of array
fruits.push("grape")

//Updating banana to pear
fruits[1] = "pear";

//printing final array
console.log(fruits)


//---------------------------------------------

//Assignment 2 : Objects Operation

//Creating an empty object
let person = {
    name: "John",
    age: 30,
    city: "New York"
}

//Removing age property from object
delete person.age

//Add new property and value in object
person.job = "Engineer"

//Updating city property
person.city = "San Francisco"

//printing final object
console.log(person)

//------------------------------------------------

//Assignment 3 : Array of objects

//Creating empty array car
let car = []

//Adding three car objects
car[0] = carOne = {
    make: "Hyundai",
    model: "Aura",
    year: 2023
}
car[1] = carTwo = {
    make: "Toyota",
    model: "Camry",
    year: 2020
}
car[2] = carThree = {
    make: "Mahindra",
    model: "ScorpioN",
    year: 2022
}

//Removing the first car object from array
car[0] = delete carOne

//Adding new car object to the array
car.push(carFour = {
    make : "Honda",
    model: "Civic",
    year: 2020
})

//Updating model property of second object in array to Accord
carTwo.model = "Accord"

console.log(car)