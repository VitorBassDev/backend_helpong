const expres = require('express');
const connection = require ('../database/connection');

module.exports = {

  async loginOng (request, response){

    const {acesso} = request.body;

    try {
      const usuario = await connection('tbl_usuario')
      .where('cpf', acesso)
      .select('nome')
      .first();

      if(!usuario){
        return response.status(400).json({
           Error: 'Ong não encontrada'
        })
      }
      return response.json(usuario)

    } catch (error) {
      
      return response.json({
        Mensagem: "Erro na Busca"
      })
    }

    
  },
}