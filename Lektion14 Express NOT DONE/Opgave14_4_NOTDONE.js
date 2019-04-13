const express = require('express');
const app = express();


function log(request, responce, next) {
    console.log(request.method + ': ' + request.url);
    next();
}

app.get('/', (req, res) => {
    res.send("jeg er i GET / path :)");
});


app.get('/messages', (req, res) => {
    res.send("jeg er i GET /message path :) ");
});

app.get('/message/:id', (req, res) => {
    try {
        res.send("jeg er i /message/:id path :)");
    }
    catch (e) {
        res.send("jeg er i /message/:id path :)  med Error: "+ e.valueOf());
    }

});

app.listen(8080);