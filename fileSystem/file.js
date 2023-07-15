const fs = require('fs');

function CreateFile(){
    return (
        fs.writeFile("/ZEN WORKPLACE/backendNode/fileSystem/output.txt", content, (err)=> {
            if (err) {
                console.log(err);
                return;
            }
        })
    )
}

module.exports = {
    CreateFile
}
