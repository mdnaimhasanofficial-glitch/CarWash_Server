import 'dotenv/config'
import express from 'express'
import cors from 'cors'

const app = express();

app.use(cors())
app.use(express.json())

import { MongoClient } from 'mongodb';
const client = new MongoClient(process.env.MONGODB_URI);
export async function connectToMongoDB() {
  try {
    await client.connect();
    console.log("You successfully connected to MongoDB!");
    return client;
  } catch (err) {
    console.dir(err);
  }
}

app.listen(process.env.PORT || 5000, ()=>{
    console.log(`Server in running on port ${PORT}`);
})