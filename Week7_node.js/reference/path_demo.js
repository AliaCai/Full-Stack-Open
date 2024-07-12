const path = require('path');//core module so not include ./ or do npm install path because it is already installed
//Base file name


//PATH MODULES
//console.log(__filename); -> /Users/aliacai/Documents/GitHub/Full-Stack-Open/Week7_node.js/reference/path_demo.js
//Base file name
console.log(path.basename(__filename));//path_demo.js

//Directory name
console.log(path.dirname(__filename));///Users/aliacai/Documents/GitHub/Full-Stack-Open/Week7_node.js/reference

//File extension
console.log(path.extname(__filename)); //.js

//Create path object
console.log(path.parse)
console.log(path.parse(__filename));

/*
[Function: parse]
{
  root: '/',
  dir: '/Users/aliacai/Documents/GitHub/Full-Stack-Open/Week7_node.js/reference',
  base: 'path_demo.js',
  ext: '.js',
  name: 'path_demo'
}*/

console.log(path.parse(__filename).base);



//Concatenate paths
//../test/hello.html
console.log(path.join(__dirname, 'test', 'hello.html'));
