'use strict';
const http = require('http');
const fs = require('fs');
const path = require('path');

const router = {
  GET: {
    '/input': function (req, res) {
      res.end(fs.readFileSync(path.join(__dirname, './view/demo_input.html')));
    }
  }
}

const server = http.createServer((req, res) => {
  if (req.url.startsWith('/public')) {
    res.end(fs.readFileSync(path.join(__dirname, `.${req.url}`)));
    return;
  }

  let fn = router[req.method] && router[req.method][req.url];
  if (typeof fn === 'function') {
    fn(req, res);
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

server.listen(8080, () => console.log('http server start at 8080...'));