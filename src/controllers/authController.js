const connection  = require ('../database/connection');

module.exports = {

  async auth_ong (request, response, next){

    const  {
      email_usuario,
      //senha_usuario
    } = request.body;
  
    // BUSCAR EMAIL E TIPO DE PERFIL NO BANCO DE DADOS
    const ong = await connection('tbl_usuario')
      .where('email_usuario', email_usuario)
      .whereRaw('perfil_usuario = ?', 1)
      .select('nome_usuario', 'perfil_usuario')
      .first();
      // VALIDAR O RESULTADO DA QUERY ACIMA
      if(!ong){
        console.log("Email Não encontrado" )
        return response.status(400).json({ error: 'No Ong Found with this id'});
      } else {
        // MOSTRAR O RESULTADO DA QUERY, CASO FOR VERDADEIRA
        console.log(ong)
        return response.json(ong);
      }
      // MOSTRAR O RESULTADO DA QUERY, CASO FOR VERDADEIRA
      // console.log(ong)
      // return response.json(ong);
  },

  auth_doador (request, response) {
    const resposta =  {
      mensagem : "Get_User - Cheguei Aqui"
    }
      console.log(resposta) 
  
    return response.json(resposta);
  },
}