var listItem=document.getElementsByTagName("ul");
console.log(listItem);

for (var i=0; i<listItem.length;i++){
    listItem[i].addEventListener('click',func1);

    //console.log(1);
}



function func1(e){
    console.log(e);
    console.log(e.target);
    var lstI=document.getElementById(e.tartet);
    console.log(lstI);
    listItem[0].style.background='white';
}