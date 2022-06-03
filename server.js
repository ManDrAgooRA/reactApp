const jsonServer = require('json-server');
const auth = require('json-server-auth');
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

server.use(auth);
server.use(router);
server.listen(port, () => {
  console.log(`Server is work on port: ${port}`);
});
