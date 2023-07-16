const express = require('express');
require('dotenv').config()
const fs = require('fs');

// create an express app
const app = express();
app.use(express.json());

// homepage
app.get('/', (request, response) => {
    response.send('<h1>Hello World!</h1>');
});

// api to create file
app.get('/createFile', (request, response) => {
    const date = new Date()

    let fileName = `Date-${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} Time-${date.getHours()}H ${date.getMinutes()}min ${date.getSeconds()}sec`

    fs.writeFile(`/ZEN WORKPLACE/Node Projects/file-system-task/fileSystem/${fileName}.txt`, date.toString(), (err) => {
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