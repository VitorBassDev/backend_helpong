const expres = require('express');
const connection = require ('../database/connection');

const crypto = require ('crypto');
const { join } = require('path');

module.exports = {

  async NecessidadeJoin (request, response){

    try {
      const necessidade = await connection('tbl_necessidade')
      .join('tbl_usuario',  'tbl_usuario.id_usuario', '=', 'tbl_necessidade.usuario_id')
      .select([
        'tbl_necessidade.*', 
        'tbl_usuario.nome',
        'tbl_usuario.email',
        'tbl_usuario.cpf',
      ]);

      return response.json(necessidade);
      
    } catch (error) {
      console.log(error, "Erro na busca")
      return response.json({
        Mensagem: "Erro na busca"
      })
    }
  },
}