import { createServer } from 'node:http';
import { checkout } from './checkout.js';

createServer(async (request, response) => {
  response.setHeader('content-type', 'application/json');
  if (request.method !== 'POST' || request.url !== '/orders') {
    response.writeHead(404).end(JSON.stringify({ error: 'Use POST /orders' }));
    return;
  }
  try {
    const chunks = [];
    for await (const chunk of request) chunks.push(chunk);
    const result = await checkout(JSON.parse(Buffer.concat(chunks).toString()));
    response.writeHead(201).end(JSON.stringify(result));
  } catch (error) {
    response.writeHead(400).end(JSON.stringify({ error: error.message }));
  }
}).listen(3000, () => console.log('Shop API: http://localhost:3000/orders'));
