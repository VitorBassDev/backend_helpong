require('dotenv/config');

const express   = require('express');
const http      = require ('http');
const cors      = require ('cors');
const routes =  require('./router');

const app       = express();

app.use(cors());
app.use(express.json());
app.use(routes);

const server = http.createServer(app);
  server.listen(process.env.PORT_BACKEND, () => {
  console.log(`Novo Backend - Help a ONG - PORT`, process.env.PORT_BACKEND);
}); 