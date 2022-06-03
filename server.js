const jsonServer = require('json-server');

const app = jsonServer.create();
const path = require('path');
const express = require('express');

const middlewares = jsonServer.defaults({
  static: './db.json',
});
const router = jsonServer.router('db.json');
const port = process.env.PORT || 3001;

app.use(middlewares);
app.use('/db', middlewares, router);
app.use(express.static(path.join(__dirname, 'build')));

console.log(`process.env.DATABASE_URL: ${process.env.DATABASE_URL}`);
console.log(
  `process.env.DATABASE_URL.API_KEY: ${process.env.DATABASE_URL.API_KEY}`
);
console.log(`process.env.API_KEY: ${process.env.API_KEY}`);

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port);
