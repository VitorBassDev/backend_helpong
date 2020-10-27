const expres = require('express');
const connection = require ('../database/connection');

const crypto = require ('crypto');

module.exports = {

  async listaNecessidade (request, response){

    try {
      const necessidade = await connection('tbl_necessidade').select('*')  
        console.log("Lista de Necessidade")
        return response.json(necessidade);
    } catch (error) {
      console.log(error, "Parametros não encontrados")
      
      return response.json({
        Mensagem: "Parametros não encontrados"
      })

    }
  },

  async necessidadePorOng (request, response){
    const usuario_id = request.headers.authorization;

    try {
      const necessidade = await connection('tbl_necessidade')
      .where('usuario_id', usuario_id)
      .select('*');

      return response.json(necessidade);
      
    } catch (error) {
      console.log(error, "Erro na busca")
      return response.json({
        Mensagem: "Erro na busca"
      })
    }
    
  },
  async criaNecessidade (request, response) {
    const {
      descricao,
      quantidade,
      situacao,
    } = request.body
    
    //const token = request.headers.authorization;
    const usuario_id = request.headers.authorization;

    const user_id = usuario_id

    const id_identificador = crypto.randomBytes(2).toString('HEX');

    const identificador = id_identificador;

    try {
      const [id, usuario_id] = await connection('tbl_necessidade').insert({
        descricao,
        quantidade,
        situacao,
        identificador,
        usuario_id : user_id
      })
        console.log("Necessidade Cadastrada com Sucesso")
        return response.json({ identificador })

    } catch ( error) {
      console.log(error, "Erro no cadastro")
      return response.json({
        Mensagem: "Erro no cadastro"
      })
    }
  },

  async deletaNecessidade (request, response) {
    const {id} = request.params;
    const usuario_id = request.headers.authorization;

    const necessidade = await connection('tbl_necessidade')
    .where('id_necessidade', id)
    .select('usuario_id')
    .first();

    if(necessidade.usuario_id != usuario_id){
      return response.status(401).json({
        error: "Operation not permeitted"
      })
    }
    await connection('tbl_necessidade').where('id_necessidade', id).delete();
    return response.status(204).send();
  },
}