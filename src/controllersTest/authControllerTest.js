const bcrypt = require ('bcrypt');
const jwt  = require ('jsonwebtoken');
const connection  = require ('../database/connection');

module.exports = {

  async auth_ong (request, response, next){

    const  {
      email_usuario,
      senha_usuario
    } = request.body;

    var senha = request.body.senha_usuario;
  
    // BUSCAR EMAIL E TIPO DE PERFIL NO BANCO DE DADOS
    const user = await connection('tbl_usuario')
      .where('email_usuario', email_usuario)
      //.whereRaw('senha_usuario', senha_usuario )
      .whereRaw('perfil_usuario = ?', 1)
      .select('nome_usuario', 'perfil_usuario', 'senha_usuario')
      .first();
       // VALIDAR O RESULTADO DA QUERY ACIMA
      if(!user){
        console.log("Email Não encontrado" )
        return response.status(400).json({ error: 'No Email Ong Found with this id'});
      } else {
          const match = await bcrypt.compare(senha, user.senha_usuario);
            if(match) {
              console.log('Granted! Senha Verificada');
              const token = jwt.sign({
                id: user.email_usuario
              }, "segredo", {
                expiresIn: "1h"
                });
                  return response.status(200).json({
                    Mensagem: "Autenticado com Sucesso",
                    token, user
                  });
            } else {
              console.log('Access Denied');
              return response.status(400).json({
                error: 'Acesso Negado'
              })
            }          
          }
  },
  async auth_doador (request, response, next){

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
}   