const express = require('express');
require('dotenv').config()
const filesRouter = require('./routes/files')

// create an express app
const app = express();
app.use(express.json());

// homepage
app.get('/', (request, response) => {
    response.send('<h1>Hello World!</h1>');
});

// file router
app.use('/files', filesRouter);

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});