console.log("Hello")

var b = "smoothie"
console.log(b)
//var age = prompt("What is your age?")
//document.getElementById("someText").innerHTML = age

function greeting(yourname) {
  var result = "Hello" + " " + yourname //concatenation
  console.log(result)
}
// var name = prompt("What is your name ?")
// greeting(name);

//while loops
//for loop
/*
for (let num = 0; num < 100; num++) {
  console.log(num)
}
*/

//Datatypes
/*
let age = 18
let namesd = "Anup"
let nameyours = { first: "Jane", last: "Doe" } //Object
let truth = "false"
let groceries = ["apple", "banana", "oranges"] //array
let random //undefined
let nothing = null // value null

//Strings in Javascript (common methods)
let fruit = "banana"
let vegis = "cauli,brinjal"
let moreFruits = "banana\napple" //new line
console.log(moreFruits)
console.log(fruit.indexOf("nan"))
console.log(fruit.slice(2, 5)) //o/p - nan
console.log(fruit.replace("ban", "123"))
console.log(fruit[2])
console.log(vegis.split(","))
console.log(fruit.split("")) // split by characters

//Arrays in Javascript
let fruits = ["banana", "apple", "orange", "pineapples"]
fruits = new Array("banana", "apple", "orange", "pineapples")

console.log(fruits[2])
fruits[0] = "pear"
console.log(fruits)

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i])
}
//array common methods
console.log("to string", fruits.toString())
console.log(fruits.join("*"))
console.log(fruits.pop(), fruits)
*/

let someNumbers = [5, 10, 2, 25, 3, 255, 1, 2, 5, 334, 321, 2]
console.log(
  someNumbers.sort(function (a, b) {
    return a - b
  })
) //
console.log(
  someNumbers.sort(function (a, b) {
    return b - a
  })
) //

let emptyArray = new Array()
for (let num = 0; num <= 10; num++) {
  emptyArray.push(num)
}
console.log(emptyArray)
