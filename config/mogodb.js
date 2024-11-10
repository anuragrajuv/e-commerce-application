const mongoose = require('mongoose');
const MONGODB_URI = "mongodb+srv://anuragrajuv:md3AdBQ2j41T90JT@e-commerce.zbotc.mongodb.net/?retryWrites=true&w=majority&appName=E-commerce";

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB Cloud!'))
  .catch(err => console.error('MongoDB connection error:', err));
  
