//------------------------------------// PART 1//------------------------------------


//DOM -> Document Object Model -> tree of nodes
//Object Oriented Representation
//replacement of JQuery


//EXMAINE THE DOCUMENT OBJECT//

/*0. document. ..[..]
//console.dir(document);//different information attached to this document
console.log(document.domain);//local host
console.log(document.URL);
console.log(document.title);
//document.title =123; //change;
console.log(document.doctype);
console.log(document.head);
console.log(document.body)
console.log(document.all);
console.log(document.all[10]);
document.all[10].textContent='Hello'; // dont really want to use it because number may change when you add new things to html

console.log(document.forms[0]);//html conlections of froms -> index start from 0
console.log(document.links);//emoty-> none
console.log(document.images);
*/

//Query the dom
//------------------------------------1. GET ELEMNT BY ID -> with any selector//------------------------------------
//console.log(document.getElementById('header-title'));
//var headerTitle = document.getElementById('header-title');
//var header = document.getElementById('main-header');

//console.log(headerTitle);

/*n change through .
headerTitle.textContent='Hello';
headerTitle.innerText='GoodBye';//overweote -> difference: one pays attention to styling
*/

/* textContent vs innerText ******************
console.log(headerTitle.textContent);//display:none -> shows here
console.log(headerTitle.innerText);// care about style -> no 123 anymore
*/

/*innerHTML*/
//headerTitle.innerHTML='<h3>Hello</h3>' //put h3 into h1

//header.style.borderBottom='solid 3px black'; //cannot do border-bottom


//------------------------------------2. GETELEMENTBYCLASS !=classname//------------------------------------
/*
var items=document.getElementsByClassName('list-group-item');
console.log(items);//html conllection
console.log(items[1]);//0 based
items[1].textContent = 'Hello 2';
items[1].style.fontWeight='bold';
items[1].style.backgroundColor='yellow';

//Gives error
//items.style.backgroundColor='#f4f4f4'; // not work because this is a html collection-> need loop
for (var i=0; i<items.length; i++){
    items[i].style.backgroundColor='#f4f4f4'; 
}
*/


//------------------------------------3.GETELEMENTBYTAG similar to by class name //------------------------------------
/*
var li=document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
li[1].textContent = 'Hello 2';
li[1].style.fontWeight='bold';
li[1].style.backgroundColor='yellow';

//Gives error
//items.style.backgroundColor='#f4f4f4'; // not work because this is a html collection-> need loop

// ******************
for (var i=0; i<li.length; i++){
    li[i].style.backgroundColor='#f4f4f4'; 
}
*/

//------------------------------------4.QUERRYSELECTOR ->only 1 item -> only grab  first 1//------------------------------------

/*
var header=document.querySelector('#main-header');//any css selector very similar to jquery $()
header.style.borderBottom='solid 4px #ccc';

var input=document.querySelector('input');
input.value = 'Hello World';

var submit = document.querySelector('input[type="submit"]');//liks css
submit.value="SEND";

var item=document.querySelector('.list-group-item');
item.style.color='red';

var lastItem=document.querySelector('.list-group-item:last-child');
lastItem.style.color='blue';

var secondItem=document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color='coral';

*/

//------------------------------------5. QUERYSELECTALL//------------------------------------

/*
var titles = document.querySelectorAll(".title");//classid, tag...
// -> node list -> can run array fuction on i1
console.log(titles);
titles[0].textContent='Hello';

var odd=document.querySelectorAll('li:nth-child(odd)');//css psude selector
var even=document.querySelectorAll('li:nth-child(even)');//css psude selector

for(var i=0; i<odd.length;i++){
    odd[i].style.background='#f4f4f4';
    even[i].style.background='#ccc';
}
*/

//------------------------------------// PART 2//------------------------------------


//------------------------------------6. TRAVERSING THE DOM//------------------------------------
//moving to parent node, child node, sibling child
var itemList=document.querySelector('#items');

//6.1 parentNode
/*
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = '#f4f4f4';
//console.log(itemList.parentNode.parentNode.parentNode);
*/

//6.2 parentElement 
//used to be interchangeable with parentNode
/*
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentElement.parentElement.parentElement);
*/

//6.3 childNodes vs Children ******************
//console.log(itemList.childNodes);//Node list -> array //0->#text (in between)(white space, line break) -> make tag by tag if want to remove it]

/*
console.log(itemList.children); //just element -> no line break anymore //html collection-> no longer a node list
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor = 'yellow';


//6.4 firstChild vs firstElementChild ******************
//firstChild
console.log(itemList.firstChild);//give #text because of the space -> useless <?>
//firstElementChild
console.log(itemList.firstElementChild); //the real first one
itemList.firstElementChild.textContent='Hello 1';

//6.5 lastChild vs lastElementChild ******************
//lastChild
console.log(itemList.lastChild);//give #text because of the space -> useless <?>
//lastElementChild
console.log(itemList.lastElementChild); //the real first one
itemList.lastElementChild.textContent='Hello 4';


//6.6 nextSibling vs nextElementSibling
//nextSibling
console.log(itemList.nextSibling);
//nextElementSibling
console.log(itemList.nextElementSibling);

//6.7 previousSibling vs previousElementSibling
// previousSibling
console.log(itemList.previousSibling);
//previousElementSibling
console.log(itemList.previousElementSibling)
itemList.previousElementSibling.style.color='green'; 
*/

//------------------------------------7. createElement//------------------------------------

//create a div
var newDiv = document.createElement('div');
//Add class
newDiv.className='hello';

//Add id
newDiv.id='hello1';

//Add attr  ((?))?????????
newDiv.setAttribute('title', 'Hello Div');

//Create text Node
var newDivText = document.createTextNode('Hello World');

// Add text to div
newDiv.appendChild(newDivText); //-> in js but not in dom for now

var container=document.querySelector('header .container');
var h1 = document.querySelector('header h1');

console.log(newDiv);

newDiv.style.fontSize='30px';

//2 parameter: what to insert; what to insert before
container.insertBefore(newDiv, h1);//-> part of dom element now

