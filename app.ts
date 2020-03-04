
// my name
var firstName: string = "Pawel";

// Number of states
const numberOfStates: number = 50;

console.log(firstName);
console.log(numberOfStates);


// Adding two numbers together
var add: number = (5 + 4)
console.log(add)


//creating say hello function
function sayHello(): void { // do i need to use void?
    console.log("Hello World!")
}
sayHello()
console.log('')


//check age function
function checkAge(name: string, age: number) {
    if (age < 21) {
        return "Sorry " + name + " you aren't old enough to view this page!";
    }
}

var output = checkAge('Charles', 21)
console.log(output);
var output = checkAge('Abby', 27);
console.log(output);
var output = checkAge('James', 18);
console.log(output);
var output = checkAge('John', 17);
console.log(output);

console.log('')

// logging an array of veggies
let veggies: string[] = ['Yucca', 'Potatoes', 'Broccoli', 'Carrots', 'Cabbage'];
for (let i = 0; i < veggies.length; i++) {
    console.log(veggies[i])
    
}
console.log('')

// logging array of wazywo with forEach
let forEachVeggie: string[] = ['Marchew', 'Kartofel', 'Broluly', 'Papryka', 'Kapusta'];
forEachVeggie.forEach(function(wazywo){
    console.log(wazywo)
})

console.log('')


let people: Array<Ipeople> = [
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
]

interface Ipeople {
    name: string,
    age: number
}

// loop that checks the age with the checkAga function from above
for (let i = 0; i < people.length; i++) {
    console.log(checkAge(people[i].name, people[i].age))
}

console.log('')

function getLength(word1:string){
    return word1.length
}

let helloWorld = getLength('Hello World')
console.log(helloWorld)

if (helloWorld % 2 ===0) {
    console.log('The world is nice and even!');
} else {
    console.log('The world is an odd place!');
}