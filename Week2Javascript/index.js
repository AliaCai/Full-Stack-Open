//Comment -> explain why and how
// This is my first JavaScript Code
//node is a runtime environment for runnong js code
//console.log('Hello World');

//issue with var

//-----------------------------------------VAR
//declare a variable
let name1='Alia';
console.log(name1);

//Cannot be a reserved keyword -> error
//Shouldd be meangingful
//Cannot start with a number (eg. 1name)
//Cannot contain a space or hypen (-)
//Are case-sensitive;

let firstName1='Alia';
let lastName1='Cai'; 

//-----------------------------------------CONS -> not change value
const interestRate=0.3;
console.log(interestRate);

//-----------------------------------------tyles
//primitive/value types-> string, number, bo0lean, undefined (type & value), null
// reference types->Object,Array, Function

let name2 ='Alia'; //Starting Literal
let age2=30; //Number Literal
let isApproved=true;//Boolean Literal
let firstName = undefined;
let selectedColor = null; //clear the value of variable

//-----------------------------------------Dynamic Language
//static language ->type of variable cannot be changed
console.log(typeof name3);
name3=1;
console.log(typeof name3); //js does not have int and floar -> all are num

//-----------------------------------------Object
let person = {
    name:'Alia',
    age:19
}
console.log(person);

//Dot Notation -> more consices
person.name = 'John';

//Bracket Notation ->DKK what property
let selection='name';
person[selection]='Mary';

console.log(person.name);

//-----------------------------------------Arr (obj)-> a data structure to represent a list of items
let selectedColors=['red', 'blue'];//length of arr is dynamic, can have different type
selectedColors[2] = 1;
console.log(selectedColors);
console.log(selectedColors.length);

//-----------------------------------------func

function greet(name, lastName){//prameter
    console.log('Hello ' + name + ' ' + lastName);
}//no semicolon in the end

greet('Alia', 'Cai');//Alia-> argument

//-----------------------------------------types of func
//performing a task
function greet(name, lastName){//prameter
    console.log('Hello ' + name + ' ' + lastName);
}//no semicolon in the end

greet('Alia', 'Cai');//Alia-> argument

// calculating a value
function square(number){
    return number*number;
}
let num = square(2);
console.log(num);
console.log(square(2)); //-> 2 functions call 1.square 2. log()
