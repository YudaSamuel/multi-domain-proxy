const http = require('http');
const httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer({});

const routing = {
  'test.yuda.dev': 'http://localhost:5001',
  'test2.yuda.dev': 'http://localhost:5002',
};

const server = http.createServer((req, res) => {
  const host = req.headers.host && req.headers.host.split(':')[0];
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.socket.remoteAddress;
  const target = routing[host];
  console.log(`${host} -> ${ip}`);

  if (target) {
    proxy.web(req, res, { target }, (e) => {
      res.writeHead(500);
      res.end('Proxy error.');
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('X');
  }
});

server.listen(80, () => {
  console.log('(port 80) online!');
});
