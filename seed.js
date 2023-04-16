const MongoClient = require('mongodb').MongoClient;
const uri = 'mongodb://localhost:27018';

MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, async (err, client) => {
    if (err) {
        console.error('Error connecting to MongoDB:', err);
        return;
    }

    const db = client.db('t-shirt-store');
    const products = db.collection('products');

    const genericTShirts = Array.from({ length: 10 }, (_, i) => ({
        name: `T-Shirt ${i + 1}`,
        description: `This is a sample description for T-Shirt ${i + 1}.`,
        price: (Math.random() * 20 + 10).toFixed(2),
        imageUrl: 'https://via.placeholder.com/150',
        sizes: ['S', 'M', 'L', 'XL'],
        colors: ['Red', 'Blue', 'Green', 'Black'],
    }));

    try {
        const result = await products.insertMany(genericTShirts);
        console.log('Inserted', result.insertedCount, 'documents into the products collection.');
    } catch (error) {
        console.error('Error inserting documents:', error);
    } finally {
        client.close();
    }
});