const express = require('express');
require('dotenv').config()
const fs = require('fs');
// const CreateFile = require('./fileSystem/file');

// create an express app
const app = express();
app.use(express.json());

app.get('/', (request, response) => {
    response.send('<h1>Hello World!</h1>');
});

app.get('/createFile', (request, response) => {
    const data = request.body.data
    const date = new Date()
    console.log(date)
    fs.writeFile(`/ZEN WORKPLACE/Node Projects/file-system-task/fileSystem/${date}.txt`, data, (err)=> {
        if (err) {
            console.log(err);
            return;
        }
    })
    response.send(date);
});

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});