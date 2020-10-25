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

  async necessidadeOng (request, response) {
    const {
      descricao,
      quantidade,
      situacao,
      usuario_id
    } = request.body

    const id_identificador = crypto.randomBytes(2).toString('HEX');

    const identificador = id_identificador;

    try {
      await connection('tbl_necessidade').insert({
        descricao,
        quantidade,
        situacao,
        identificador,
        usuario_id,
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
}