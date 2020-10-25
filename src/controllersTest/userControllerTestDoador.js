const bcrypt = require ('bcrypt');
const connection = require ('../database/connection');

module.exports = {

  async create_user_doador (request, response) {
    const  {
      nome_usuario,
      email_usuario,
      senha_usuario,
    } = request.body;
    
    senha = senha_usuario
    email = email_usuario


    try {
      await connection.insert({
        nome_usuario: nome_usuario,
        email_usuario: email,
        senha_usuario: senha,
        perfil_usuario: 2
      }).into('tbl_usuario').then(data =>{
      
        console.log("cadastrou");
          return response.json({
            Mensagem: data,
            Email: email_usuario
          });
        }).catch(err => {
          console.log(err);
            return response.json({
              Mensagem: "Erro no Cadastro"
            });
          });

    } catch (error) {
      console.log("Erro na Criação do Doador ...................!", error)
        return response.json({
          Mensagem: "Erro na Criação do Doador ...................!"
        })
      }
  }
}