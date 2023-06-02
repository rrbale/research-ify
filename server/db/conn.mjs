import { MongoClient } from "mongodb";

const connectionString = "mongodb+srv://rrbale:ritvikps4@cluster0.hfeblfz.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(connectionString);

let conn;
try {
  conn = await client.connect();
} catch(e) {
  console.error(e);
}

let db = conn.db("MyDatabase");

export default db;
