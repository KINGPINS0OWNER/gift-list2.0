// project-root/src/index.js

const { connectToMongoDB } = require('./mongodb');

async function main() {
  try {
    const { client, collection } = await connectToMongoDB();

    // Perform CRUD operations using the collection
    const result = await collection.insertOne({ name: 'John', age: 30 });

    console.log('Document inserted:', result.insertedId);

    // Close the MongoDB connection when done
    await client.close();
  } catch (error) {
    console.error('Error:', error);
  }
}

main();
