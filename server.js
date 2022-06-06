// const jsonServer = require('json-server');
const auth = require('json-server-auth');
const path = require('path');
// const server = jsonServer.create();
// const router = jsonServer.router('./db.json');

// server.get('/echo', (req, res) => {
//   res.jsonp(req.query);
// });

// server.use(jsonServer.bodyParser);
// server.use((req, res, next) => {
//   if (req.method === 'POST') {
//     req.body.createdAt = Date.now();
//   }
//   // Continue to JSON Server router
//   next();
// });

// const middlewares = jsonServer.defaults({
//   static: './build',
// });

// const port = process.env.PORT || 5000;

// server.db = router.db;

// server.use(middlewares);
// server.use(
//   jsonServer.rewriter({
//     '/api/+': '/$1',
//   })
// );

// server.use(auth);
// server.use(router);
// server.listen(port);

const jsonServer = require('json-server');

const server = jsonServer.create();
const router = jsonServer.router('./db.json');
const middlewares = jsonServer.defaults({
  static: './build',
});

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build/index.html'));
});

const PORT = process.env.PORT || 8000;
server.use(middlewares);
server.use(
  jsonServer.rewriter({
    '/api/*': '/$1',
  })
);
server.use(router);
server.listen(PORT);

server.use(auth);
