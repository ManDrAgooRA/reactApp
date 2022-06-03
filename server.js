// const jsonServer = require('json-server');

// const app = jsonServer.create();
// const path = require('path');
// const express = require('express');

// const middlewares = jsonServer.defaults({
//   static: './db.json',
// });
// const router = jsonServer.router('db.json');
// const port = process.env.PORT || 3004;

// app.use(middlewares);
// app.use('/db', middlewares, router);
// app.use(express.static(path.join(__dirname, 'build')));

// console.log(`process.env.API_KEY: ${process.env.API_KEY}`);

// app.get('/*', function (req, res) {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

// app.listen(port);

const jsonServer = require('json-server');

const server = jsonServer.create();
const router = jsonServer.router('./db.json');
const middlewares = jsonServer.defaults({
  static: './build',
});

const port = process.env.PORT || 5000;

server.use(middlewares);
server.use(
  jsonServer.rewriter({
    '/api/+': '/$1',
  })
);

server.use(router);
server.listen(port, () => {
  console.log(`Server is work on port: ${port}`);
});
