MongoDB


Project:
- Simple Node/Express Application
- 2 models: Profile, team
- restapi


Topics:
- Mongo DB
- Mongoose ORN
- Crud (Create, read, update, delete)

-turbo (deploy)
-mLab(mongoDB)


--------------------
- notonly-sql (sql-> structured query language)
- non-relational
- document database (json -> js object notation) ->BSON (extention of json)


relational -> need schema (how data is structued)(strict)


-> PostgreSQL (predefined strict)
->mongoDB (optional flexible) (no schema) -> can be scalled easily

**{
    "key":"vale"//number/array;
}
**

heyuncai10
7gTtmACEEqeS97RM

Crud operation: create, read, update, delete

>db
>show dbs
>use <database name> <this database is not created untill data is inserted into it>

create a collection(> -> collection name)
>db.createCollection("posts")

collections are like tables in a sql databale

//db-> database we are using, post->    create a collection called posts if the collection does not exists   -> insertOne(object)
//Insert 1 doc
>db.posts.insertOne({ title: 'Post 1', body: 'Body of post.', category: 'News', likes: 1, tags: ['news', 'events'], date: Date() })


//insert more than one
db.posts.insertMany([array])

//see the document
>db.posts.find()
>db.posts.find({category:"News"})
>db.posts.find().sort({title:-1})   //1 -> acesngin order, -1 ->descending order
>db.posts.find({category:"News"}).count()
>db.posts.find().limit(2) //return the first 2 it finds

>db.posts.findOne()//return the first match
>db.posts.findOne({likes: {$gt: 3}})   //gt -> greater than , gte >=, lt < , lte <=
//find all the docs in the collection


//Update existence doc
update/updateMany


---10:11 https://youtu.be/2QQGWYe7IDU?si=juhnk1buQ7icJ_IE