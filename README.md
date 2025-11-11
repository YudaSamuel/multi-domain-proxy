# Node.js Reverse Proxy

A simple reverse proxy server built with Node.js and `http-proxy`.  
It routes incoming HTTP requests to different backend servers based on the domain name.

## Features
- Domain-based routing  
- Logs client IP addresses  
- Basic error handling  

## Example
```js
const routing = {
  'test.yuda.dev': 'http://localhost:5001',
  'test2.yuda.dev': 'http://localhost:5002',
};
```
