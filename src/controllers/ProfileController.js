const connection = require ('../database/connection');

module.exports = {

  async loginOng (request, response){

    const {cpf} = request.body;

    try {
      const usuario = await connection('tbl_usuario')
      .where('cpf', cpf)
      .select('nome', 'id_usuario')
      .first();

      if(!usuario){
        console.log("Erro na Busca");
        return response.status(400).json({
           Error: 'Ong não encontrada'
        })
      }
      console.log(usuario);
      return response.json(usuario)
    

    } catch (error) {
      console.log(error);
      return response.json({
        Mensagem: "Erro na Busca"
      })
    }

    
  },
}