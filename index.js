const express = require('express');
const ip = require('ip');

const app = express();
const port = 3030;

app.use(express.json());

app.all('/', (req, res) => {
    res.send('Hello!');
});

app.listen(port, () =>
    console.log(`Server running on ${ip.address()}:${port}...`)
);

app.on('error', erro => {
    console.log('ERRO', erro);
});

//===========================================
//                   ROUTES
//===========================================

app.post('/ROUTE', (req, res) => {
    res.json({})
});
