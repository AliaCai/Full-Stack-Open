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
[MongoDB Atlas](https://cloud.mongodb.com/v2#/org/66992980156f8953b51d567b/projects)


heyuncai10
7gTtmACEEqeS97RM

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
>db.posts.find({title:"Post 1"})
>db.posts.findOne({likes: {$gt: 3}})   //gt -> greater than , gte >=, lt < , lte <=
//find all the docs in the collection


//Update existence doc
update/updateMany
>db.posts.updateOne({title:"Post 1"},{$set: {category:"tech"}})
ONLY CHANGE ONE PARA: USE $SET

---10:11 https://youtu.be/2QQGWYe7IDU?si=juhnk1buQ7icJ_IE

> db.posts.updateOne({title: "Post 6"}, {$set: {title: 'Post 6',body:'Body of post.',category:'News'}},{upsert:true})
UPSERT IS GOING TO UPDATE IF IT IS FOUND AND INSERT IF IT IS NOT FOUND

>db.posts.updateOne({title:"Post 1"}, {$inc:{likes:2}})
INCREMENT NUMBER

> db.posts.updateMany({}, {$inc:{likes:1}})
ALL LIKES INCREMENT BY 1


//Dete
deleteOne, deleteMany
> db.posts.deleteOne({title:"Post 6"})



aggregation pipleline: search data, transform on fly, group/sort/filter/create new fields/perform math/reject the fields needed   -> multiple stages
1. stage1: $match
/**
 * query: The query in MQL.
 */
{
  accommodates: {$gt: 4},
  price:{$lt: 500},
  amenities: 'Hair dryer'
}
2. stage2: $sort
/**
 * Provide any number of field/order pairs.
 */
{
  price: 1
}

3. stage 3: $project
/**
 * specifications: The fields to
 *   include or exclude.

 tells what field we want

 name: 1 -> we want name
 */
{
  name:1,
  amenities:1,
  price:1,
  images:1,
  description:1
}
4. stage 4: $limit
/**
 * Provide the number of documents to limit.

 that's why order maters
 */
20



aggreation pipline built



//Connecting to node.js
>npm init -y
>npm i mongodb

