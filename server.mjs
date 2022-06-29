'use strict';

import express from 'express';
 import fetch from 'node-fetch';
 import cors from 'cors';

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.use(cors({
    origin: 'http://localhost:4200'
}));
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/poke', function (req, res) {
    var url = 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=0';
    
    fetch(url)
    .then(res => res.json())
    .then(data => {
        res.send({ data });
    })
    .catch(err => {
        res.send(err);
    });
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);