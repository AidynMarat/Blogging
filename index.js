const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const blogRoutes = require('./routes/blogRoutes');

const app = express();
const PORT = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use('/api', blogRoutes);

app.get('/', (req, res) => {
    res.send('Hello, World!');
  });

mongoose.connect('mongodb://localhost:27017/Blog', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error.message);
});