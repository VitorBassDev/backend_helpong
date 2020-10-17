const express   = require('express');
const app = express();
const http      = require ('http');
const cors      = require ('cors');
require('dotenv/config');


app.use(cors());
app.use(express.json());

/**
app.get('/', (request, response)=>{
  const resposta = {
    nome: "vitor guedes",
    idade: 24,
  };
  console.log(resposta);
  return response.json({resposta});
})
 */

const server = http.createServer(app);
  server.listen(process.env.PORT_BACKEND, () => {
  console.log(`Novo Backend - Help a ONG - PORT`, process.env.PORT_BACKEND);
}); 