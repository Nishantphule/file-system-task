const filesRouter = require('express').Router();
const fs = require('fs');

// create a file
filesRouter.get('/createFile', (request, response) => {
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

// retrieve all files
filesRouter.get('/', (request, response) => {

    fs.readdir(`/ZEN WORKPLACE/Node Projects/file-system-task/fileSystem`, 'utf-8', (err, files) => {
        if (err) {
            console.log(err);
            return;
        }
        response.send(files);
    })

});


module.exports = filesRouter;