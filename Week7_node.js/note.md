node.js ->  runtime
(-> depoly to ???)
express.js -> framework used in node,js


node
- js runtime (not a langage/framework)
- written in C++
- use js as server side langauge like php, python, ...


it may help to learn these first
-hhtp(status codes, headers, etc)
-json
-arrow functions
-promises 
-mvc pattern

php -> syncrybce -> multiple thread


-event driven, non-blocking i/o model  -> a single thread  -> no use in cpu intensive app
-(support then and sounds of connection -> event loop)
-popular in the industry
-same lanagues on the front and bacend (js0

)


npm -> 3rd part packages, libraries
-> node modules
->package.json
->npm script -> certain tasks


>npm init GENERATE A PACKAGE.JSON FILES
>npm instal express INSTALLS A PACKAGE LOCALLU
>npm install -g ... INSTALL SOMETHING GLOBALLU -> EVERYWHERE IN THE SYSTEM


1. node Core Modules (path, fs, http, etc)
2. 3rd party modules/packages installed via NPM
3. Custom modules (files) -> variable, function...



const path = requrire('path'); //path is a module -> path is n//ode core module
const myFile = require('./myFile');    //./ -> a myfile file in the same order


------------------------------------------------
node comes something called repple which is a read eval loop
run js directly in consle

>node 
enter
type in js
>.exist TO EXIT


npm insta xxx -> XXX SHOW IN DEPENDENCY (JSON)
dev dependency -> dependency need for develppmend 
nodemon -> dont restart my server
>npm install -D nodemon


package-lock.json -> keep track of the dependency with versions 
-----------------------------------
never depoly node modues to host
do npm install -> recreate node modules with everything inside
------------------------------------

>node xxx (eg.INDEX/INDEX.JS)

1. making class modules 
2. differnt __dirame and __filename combo
3. filesystem module (fs module) ("import it?")  -> Create folder, file, rename, read, rewrite...append
4. os module -> envorpnemtn, operating system -> hardware, memory, core
5. URL modules