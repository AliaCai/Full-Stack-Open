/*
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://heyuncai10:7gTtmACEEqeS97RM@cluster0.n2xpxys.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true});
client.connect(async err => {
    const collection = client.db("sample_airbnb").collection("listingsAndReviews");
    ;
    //perform actions on the collection object
    const pipeline =  [
        {
          $match: {
            accommodates: { $gt: 4 },
            price: { $lt: 500 },
            amenities: 'Hair dryer'
          }
        },
        { $sort: { price: 1 } },
        {
          $project: {
            name: 1,
            amenities: 1,
            price: 1,
            images: 1,
            description: 1
          }
        },
        { $limit: 20 }
      ]

    const agg = await collection.aggregate(pipeline).toArray(); //dealing with promise
    console.log(agg)

    client.close();
});

*/


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://heyuncai10:7gTtmACEEqeS97RM@cluster0.n2xpxys.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
