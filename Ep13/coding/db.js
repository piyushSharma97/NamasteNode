//mongodb+srv://piyu5496:SWwl8U8Dby1vdDil@namastenode.hkw0v.mongodb.net/?retryWrites=true&w=majority&appName=namasteNode
const {MongoClient} = require('mongodb');
const { ObjectId } = require("mongodb");
const URL = 'mongodb+srv://piyu5496:SWwl8U8Dby1vdDil@namastenode.hkw0v.mongodb.net/?retryWrites=true&w=majority&appName=namasteNode';

const client = new MongoClient(URL);
const dbName ='first';

async function main(){
    try {
        await client.connect();
        console.log('db connected successfully');
        const db = client.db(dbName);
        const collection = db.collection('test');

        const data = {
            firstname: "piyush",
            lastname: "sharma",
            city: "bikaner",
            phoneNumber: "99999999",
            education:"BTech"
        }
   // Create
    const insertData = await collection.insertMany([data])
    console.log("data inserted = ", insertData)


            //Read 
        const findData = await collection.find({}).toArray();
        console.log("All data :", findData)
        return 'done';
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
      }
}
main().then(console.log).catch(console.error).finally(()=>client.close())