var form = document.getElementById('addForm');
var itemList=document.getElementById('items');//can use querry selector as well
var filter = document.getElementById('filter');


//form submite event;
form.addEventListener('submit',addItem);
//Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup',filterItems);

//Add item
function addItem(e){
    e.preventDefault()//SUBMIT -> PREVENT NORMAL SUBMITION**********

    //Get input Value
    var newItem = document.getElementById('item').value;

    //Create new li element
    var li = document.createElement('li');

    // Add class
    li.className='list-group-item';
    
    //Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    //-----------------------------------------------------

    //Create del button element
    var deleteBtn = document.createElement('button');

    //Add classes to del button
    deleteBtn.className='btn btn-danger btn-sm float-right delete';

    //Append text node
    deleteBtn.appendChild(document.createTextNode('X'));

    //Append button to li
    li.appendChild(deleteBtn);

    //Append li to list
    itemList.appendChild(li);



}


//----------------------------------------------------------------------------------------------------------
//remove item
function removeItem(e){
    //console.log(1); //no matter where I click

    if (e.target.classList.contains('delete')){//btn has class of delete
        if(confirm('Are you Sure?')){
            var li=e.target.parentElement; //the li
            itemList.removeChild(li);

        }
    }
}

//----------------------------------------------------------------------------------------------------------
// Filter Items
function filterItems(e){
    //convert text to lowercase
    var text=e.target.value.toLowerCase();
    
    //get lis
    var items = itemList.getElementsByTagName('li');

    //Cinver to an array
    //turn a collection to array -> get more functions
    Array.from(items).forEach(function(item){//*****************
        var itemName = item.firstChild.textContent;

        if(itemName.toLowerCase().indexOf(text) != -1){//not a match -1 *****************
            item.style.display='block';
        }else{
            item.style.display='none';
        }
    }
)


}
