const expres = require('express');
const { whereRaw } = require('../database/connection');
const connection = require ('../database/connection');

module.exports = {

  async NecessidadeJoin (request, response){
    const dado = request.params;
    try {
      const doacao = await connection('tbl_necessidade')
      .join('tbl_usuario',  'tbl_usuario.id_usuario', '=', 'tbl_necessidade.usuario_id')
      .select([
        'tbl_necessidade.id_necessidade', 
        'tbl_necessidade.descricao', 
        'tbl_necessidade.quantidade', 
        'tbl_necessidade.situacao', 
        'tbl_necessidade.identificador', 
        'tbl_usuario.nome',
        'tbl_usuario.email',
        'tbl_usuario.cpf',
      ]);

      return response.json(doacao);
      
    } catch (error) {
      console.log(error, "Erro na busca")
      return response.json({
        Mensagem: "Erro na busca"
      })
    }
  },

  async Mostrar (request, response){
    const {id} = request.params;
    try {
      const doacao = await connection('tbl_necessidade')
      .join('tbl_usuario',  'tbl_usuario.id_usuario', '=', 'tbl_necessidade.usuario_id')
      .select([
        'tbl_necessidade.id_necessidade', 
        'tbl_necessidade.descricao', 
        'tbl_necessidade.quantidade', 
        'tbl_necessidade.situacao', 
        'tbl_necessidade.identificador', 
        'tbl_usuario.nome',
        'tbl_usuario.email',
        'tbl_usuario.cpf',
      ]);

      return response.json(rows, doacao);
      
    } catch (error) {
      console.log(error, "Erro na busca")
      return response.json({
        Mensagem: "Erro na busca"
      })
    }
  },
}