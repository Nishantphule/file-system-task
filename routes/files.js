const filesRouter = require('express').Router();
const fs = require('fs');

// create a file
// Go to /files/createFile to create new file
filesRouter.get('/createFile', (request, response) => {
    const date = new Date()

    let fileName = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}H;${date.getMinutes()}m;${date.getSeconds()}s`

    fs.writeFile(`Time_Stamp/${fileName}.txt`, date.toString(), (err) => {
        if (err) {
            console.log(err);
            return;
        }
    })
    response.send(date);
});

// retrieve all files
// Go to /files to get all files in timeStamp
filesRouter.get('/', (request, response) => {

    fs.readdir(`Time_Stamp`, 'utf-8', (err, files) => {
        if (err) {
            console.log(err);
            return;
        }
        response.send(files);
    })

});


module.exports = filesRouter;