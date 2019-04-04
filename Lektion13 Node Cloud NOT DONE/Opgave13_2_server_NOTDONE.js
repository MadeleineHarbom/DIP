const http = require('http');
const fs = require('fs').promises; //file server

http.createServer((request, response) => {
    if (request.url === '/') {
        fs.readdir('fil_server_eksempel/filer')
            .then(filer => {
                alert("In the then")
                let links = filer.map(fil) //How :)
                // retunere navnet paa alle filer i "filer" som et link
            })
    } else {
        let sti = 'filer' + request.url;
        // ...
    }
}).listen(8080);

console.log('Lytter på port 8080 ...');

