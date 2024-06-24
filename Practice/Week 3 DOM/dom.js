var listItem=document.getElementsByTagName("ul");
//console.log(listItem);

for (var i=0; i<listItem.length;i++){
    listItem[i].addEventListener('click',func1);

    //console.log(1);
}



function func1(e){

    var subElements=e.target.nextElementSibling;
    if(subElements.style.display=='block'){
        subElements.style.display='none';
        e.target.style.background='#b7db70';
    }else{
        e.target.style.background='none';
        subElements.style.display='block';
    }
}