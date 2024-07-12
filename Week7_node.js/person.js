//module wrapper function
//..(function (exports, require, module, _filename, _dirname){

//})

//console.log(__dirname, __filename); ->/Users/aliacai/Documents/GitHub/Full-Stack-Open/Week7_node.js /Users/aliacai/Documents/GitHub/Full-Stack-Open/Week7_node.js/person.js

class Person{

    constructor(name, age) {
        this.name=name;
        this.age=age;
    }

    greeting(){ 
        console.log(`My name is ${this.name} and I amd ${this.age}`)
    }
}

module.exports =Person;//exporting the whole class