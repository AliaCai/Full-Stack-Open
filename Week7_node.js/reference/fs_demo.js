const fs=require('fs');
const path=require('path');


/*
//1.0 CREAT FOLDER
fs.mkdir(path.join(__dirname, '/test'), {}, (err) =>{//tale a possible wrror
    if (err) throw err;//if there is an erroe thros in the consle
    console.log('Folder created...')
});
//asynchornouse -> takes in a callback, what you want to do after put in callback
//wait until the func(?) finishes -> keep going on
//most case want to use it
//(path[.options],callback)

fs.mkdirSync();//sunchynoeus no call back
//call->go on
//(path[,options])

*/


/*
//2.0 CREATEM AND WRITE TO FILE
//we can also create a file using method OPEN
//write to it -> write a file
fs.writeFile
    (path.join(__dirname, '/test','hello.txt'),
    'Hello world! write the content', 
     err =>{//tale a possible wrror
    if (err) throw err;//if there is an erroe thros in the consle
    console.log('file written to...');
});



fs.writeFile
    (path.join(__dirname, '/test','hello.txt'),
    ' I love Node.ks', //override last text
     err =>{
    if (err) throw err;
    console.log('file written to...');


//File Append
        fs.appendFile
        (path.join(__dirname, '/test','hello.txt'),
        ' I love Node.jjjjjs', //override last text
        err =>{
        if (err) throw err;
        console.log('file written to...');
        });
});


*/

/*
//3.0 Read File
//utf8 -> dpnt put this -> raw buffer, not extra coder
fs.readFile(path.join(__dirname, '/test','hello.txt'),
    'utf8',
     (err, data) =>{
    if (err) throw err;
    console.log(data);
});
*/

//4.0 Rename file

fs.rename(path.join(__dirname, '/test','hello.txt'), path.join(__dirname, '/test','helloworld.txt'),     (err) =>{
    if (err) throw err;
    console.log('File renamed...');
});

