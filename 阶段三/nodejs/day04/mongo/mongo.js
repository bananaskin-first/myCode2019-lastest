

//连接

const { MongoClient } = require('mongodb');



MongoClient.connect("mongodb://localhost:27017", async (err, client) => {
    if (err) throw err;


    let db = client.db('banana');
    let col = db.collection('bananaskin');
    let result1 = await col.insertOne({ name: '我是大', password: '123456' });
    // let result = await col.find().toArray();
    console.log(result1);


    client.close();
})