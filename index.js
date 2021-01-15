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

const config = require('./config.json');

for (const get of config.gets) {
	app.get(`/${get}`, (req, res) => {
		console.log(`/${get} Body:`, req.body);
		const json = require(`./json/${get}.json`);
		res.json(json);
	});
}

for (const post of config.posts) {
	app.get(`/${post}`, (req, res) => {
		console.log(`/${post} Body:`, req.body);
		const json = require(`./json/${post}.json`);
		res.json(json);
	});
}
