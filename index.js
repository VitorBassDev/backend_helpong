
/**
 * Rota / Recurso 
 * 
 */


 /**
  * Métodos HTTP
  * 
  * GET: Buscar/listar informação do     back-end
  * POST: Criar uma informação no back-end
  * PUT: Alterar uma informação no back-end
  * DElete: Deletar uma informação no back-end
  */

 /**
  * Tipos de Parâmetros: 
  * Query Params - ParÂmetros nomeados e enviados na rota após o símbolo '?' (Filtros, Páginação)
  * Route Params - Parâmentros utilizados para identificar Recursos
  * Request Body - Corpo da requisição, utilizado para criar ou alterar recursos
  * 
  */
/**
 * BANCOS DE DADOS 
 * SQL: MYSQL, SQLITE, POSTGRISQL, ORACLE, MICROSOFT SQL SERVER
 * NO SQL: MongoDB, CouchDB, etc
 * 
 */

/**
 * Ínicio da Aplicação:
 * 
 */

const express = require('express');
const cors = require ('cors');

const {errors } = require ('celebrate');
const routes =  require('./routes');


const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(erros());
app.listen(3333);
