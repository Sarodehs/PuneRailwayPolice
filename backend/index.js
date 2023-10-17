const express = require('express');
const { MongoClient } = require('mongodb');
const uri = 'mongodb+srv://punepolice:lSr5AlSrRlHVm4bY@cluster0.lvstr3f.mongodb.net/'; // Use IPv4 localhost
const databaseName = 'punepolice'; // Replace with your database name
const collectionName = 'chatbot'; // Replace with your collection name

const app = express();
const port = process.env.PORT || 4000;

const client = new MongoClient(uri);

async function connectToMongo() {
    try {
        await client.connect();
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

async function insertDocument(document) {
    const database = client.db(databaseName);
    const collection = database.collection(collectionName);

    try {
        const result = await collection.insertOne(document);
        console.log('Inserted a document with ID:', result.insertedId);
    } catch (error) {
        console.error('Error inserting document:', error);
    }
}

app.use(express.json());

app.post('/contactus', (req, res) => {
    const { name, email, message } = req.body;
    const document = { name, email, message };

    insertDocument(document);
    res.json({ message: 'Message saved successfully' });
});

async function insertMessage(message) {
    const database = client.db(databaseName);
    const collection = database.collection(collectionName);

    try {
        const result = await collection.insertOne({ message, timestamp: new Date() });
        console.log('Inserted a message with ID:', result.insertedId);
    } catch (error) {
        console.error('Error inserting message:', error);
    }
}

app.use(express.json());

// API endpoint to receive and store chat messages
app.post('/api/messages', async (req, res) => {
    const { message } = req.body;

    if (!message) {
        return res.status(400).json({ error: 'Message is required' });
    }

    try {
        await insertMessage(message);
        res.status(201).json({ message: 'Message saved successfully' });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while saving the message' });
    }
});

// API endpoint to retrieve chat messages
app.get('/api/messages', async (req, res) => {
    const database = client.db(databaseName);
    const collection = database.collection(collectionName);
    
    try {
        const messages = await collection.find().toArray();
        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while retrieving messages' });
    }
});



connectToMongo().then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
});
