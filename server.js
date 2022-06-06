const jsonServer = require('json-server');
const auth = require('json-server-auth');
const path = require('path');

const server = jsonServer.create();
const router = jsonServer.router('./db.json');

const routes = jsonServer.defaults({
  static: path.join(__dirname, 'build'),
});

const middlewares = jsonServer.defaults({
  static: './build',
});

const port = process.env.PORT || 5000;

server.db = router.db;

server.use(middlewares);
server.use(
  jsonServer.rewriter({
    '/api/+': '/$1',
  })
);

server.get((req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

server.use(auth);
server.use(router);
server.listen(port);
server.use(routes);
