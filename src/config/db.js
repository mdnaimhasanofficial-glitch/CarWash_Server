import { MongoClient } from 'mongodb';

let db;

export async function connectToDB() {
  const client = new MongoClient(process.env.MONGODB_URI);
  await client.connect();
  db = client.db(process.env.DB_NAME || 'CarWash');
  console.log('MongoDB connected');
  return db;
}

export function getDB() {
  return db;
}
