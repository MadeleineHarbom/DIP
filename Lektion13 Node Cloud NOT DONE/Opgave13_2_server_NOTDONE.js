const http = require('http');
const fs = require('fs').promises; //file server

http.createServer((request, response) => {
    if (request.url === '/' && request.method === 'GET') {
        console.log("Slash-path");
        fs.readdir('fil_server_eksempel/filer')
            .then(filer => {
                let rows = filer.map((fil) => {
                    //Map gaar gennem et attay og kalder en function (under) og erstatter med hvad funktionen retunerer
                    return `<tr><td>${fil}</td></tr>`
                });
                console.log(filer);
                response.writeHead(200);
                response.write(`<html><body><div>`+
                    `<table>${rows.join("")}</table>` +
                    `</div></body></table>`);
                response.end();
                //let links = filer.map(fil) //How :)
                // retunere navnet paa alle filer i "filer" som et link
            }).catch(error => console.log("Error: " + error))
    } else {
        console.log("Not intended path");
        let sti = 'filer' + request.url;
        // ...
    }
}).listen(8080);

console.log('Lytter på port 8080 ...');

