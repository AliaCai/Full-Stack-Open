Authentication (node.js)

>npm init -y
>npm i express ejs [ejs: templating langague for login, registration]
>npm i --save-dev nodemon dotenv [development dependency] [dotenv allow we have environment variable to store inside a .env file tht we cal load into our server]

create .env file
.gitignore -> .env [can contain sensitive information] / node_modules [installed dependencies]

package.json:

  "scripts": {
    "devStart":"nodemon server.js"
  },

  >npm run devStart
  >npm i bcrypt [allow us to hash password or compair hash password to make sure the application is entirely secure]
  (DOES NOT RLLY WORK)
  >npm install bcryptjs --save

  >npm i passport
  >npm i passport-local express-session express-flash
  [FOR AUTHENTICATION (google, facebook..login)][local version allow us to use user name and password to log in]
  [express-session: distore and persume users across pages]
  [express-flash: display messates for fail to log in -> use by passport inside internals to display message about wrong email,...]


  -27:47 https://www.youtube.com/watch?v=-RCnNyD0L-s&t=1666s