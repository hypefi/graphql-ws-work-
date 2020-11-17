import https from 'https';
import { execute, subscribe } from 'graphql';
import { createServer } from 'graphql-ws';

const server = https.createServer(function weServeSocketsOnly(_, res) {
  res.writeHead(404);
  res.end();
});

createServer(
  {
    schema, // from the previous step
    roots, // from the previous step
    execute,
    subscribe,
  },
  {
    server,
    path: '/graphql',
  },
);

server.listen(443);
