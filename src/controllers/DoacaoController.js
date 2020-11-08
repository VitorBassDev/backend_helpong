const expres = require('express');
const connection = require ('../database/connection');

module.exports = {

  async receberDoacao (request, response) {
    const {id} = request.params;
    const usuario_id = request.headers.authorization;

    try{
      const doacao = await connection('tbl_necessidade')
      .where('id_necessidade', id)
      .update('situacao', 'Atendida');    

      if(doacao){
        console.log("Necessidade Atendida")
        return response.json({
          Mensagem: "Necessidade Atendida",
          doacao
        })

      } else {
          console.log("Deu Erro")
      }

    } catch(error){

      console.log(error, "Erro na alteração")
      return response.json({
        Mensagem: "Erro na alteração"
      })

    }
  },
  async desfazerDoacao (request, response) {
    const {id} = request.params;
    const usuario_id = request.headers.authorization;

    try{
      const doacao = await connection('tbl_necessidade')
      .where('id_necessidade', id)
      .update('situacao', 'Não Atendida');    

      if(doacao){
        console.log("Necessidade Alterada")
        return response.json({
          Mensagem: "Necessidade Alterada",
          doacao
        })

      } else {
          console.log("Deu Erro")
      }

    } catch(error){

      console.log(error, "Erro na alteração")
      return response.json({
        Mensagem: "Erro na alteração"
      })

    }
  },

  async NecessidadeJoin (request, response){
    ///const id_necessidade = request.headers.authorization;
    const {id} = request.params;

    try {
      const doacao = await connection('tbl_necessidade')
      .join('tbl_usuario',  'tbl_usuario.id_usuario', '=', 'tbl_necessidade.usuario_id')
      .select([
        'tbl_necessidade.id_necessidade', 
        'tbl_necessidade.descricao', 
        'tbl_necessidade.situacao', 
        'tbl_necessidade.identificador', 
        'tbl_usuario.nome',
        'tbl_usuario.email',
        'tbl_usuario.cpf',
      ]).first(id);

      return response.json(doacao);
      
    } catch (error) {
      console.log(error, "Erro na busca")
      return response.json({
        Mensagem: "Erro na busca"
      })
    }
  },
}