"use strict";
// my name
var firstName = "Pawel";
// Number of states
var numberOfStates = 50;
console.log(firstName);
console.log(numberOfStates);
// Adding two numbers together
var add = (5 + 4);
console.log(add);
//creating say hello function
function sayHello() {
    console.log("Hello World!");
}
sayHello();
console.log('');
//check age function
function checkAge(name, age) {
    if (age < 21) {
        return "Sorry " + name + " you aren't old enough to view this page!";
    }
}
var output = checkAge('Charles', 21);
console.log(output);
var output = checkAge('Abby', 27);
console.log(output);
var output = checkAge('James', 18);
console.log(output);
var output = checkAge('John', 17);
console.log(output);
console.log('');
// logging an array of veggies
var veggies = ['Yucca', 'Potatoes', 'Broccoli', 'Carrots', 'Cabbage'];
for (var i = 0; i < veggies.length; i++) {
    console.log(veggies[i]);
}
console.log('');
// logging array of wazywo with forEach
var forEachVeggie = ['Marchew', 'Kartofel', 'Broluly', 'Papryka', 'Kapusta'];
forEachVeggie.forEach(function (wazywo) {
    console.log(wazywo);
});
console.log('');
var people = [
    {
        name: 'David',
        age: 30,
    },
    {
        name: 'Pawel',
        age: 35,
    },
    {
        name: 'Alex',
        age: 18,
    },
    {
        name: 'Robert',
        age: 20,
    },
    {
        name: 'Casper',
        age: 17,
    },
];
// loop that checks the age with the checkAga function from above
for (var i = 0; i < people.length; i++) {
    console.log(checkAge(people[i].name, people[i].age));
}
console.log('');
function getLength(word1) {
    return word1.length;
}
var helloWorld = getLength('Hello World');
console.log(helloWorld);
if (helloWorld % 2 === 0) {
    console.log('The world is nice and even!');
}
else {
    console.log('The world is an odd place!');
}
