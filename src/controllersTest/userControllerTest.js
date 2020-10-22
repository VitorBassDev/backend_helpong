const bcrypt = require ('bcrypt');
const connection = require ('../database/connection');

module.exports = {

  select_user_test (request, response) {
    
  const resultado = connection.select().table("tbl_usuario").then(data =>{
    console.log(data);
  }).catch(err => {
    console.log(err);
  });

  return response.json(resultado);
  },

  async create_user_ong (request, response) {
    const  {
      nome_usuario,
      email_usuario,
      senha_usuario,
    } = request.body;
    
    const dados = request.body;    

    const rows = await connection     
      .from("tbl_usuario")
      .select()
      . where({ 
        email_usuario: request.body.email_usuario
        })
      
        if(rows.length > 0 ){
          response.json({
            mensagem: "email Já cadastrado"
          });
          console.log({
            rows, 
            mensagem: "Email em uso"});
        } else {
          await bcrypt.hash(request.body.senha_usuario, 10,(errBcrypt, hash) => {
            if(errBcrypt){
              return response.status(500).json({
                error: errBcrypt,
                Mensagem: "Erro na Senha"
              });
            } else {
              const id = connection.insert({
                nome_usuario, 
                email_usuario,
                senha_usuario: hash,
                perfil_usuario: 1
                }).into('tbl_usuario').then(data =>{
                  return response.json({
                    Email: data.email_usuario,
                    });
                  }).catch(err => {
                      console.log(err);
                      return response.json({
                        Mensagem: "Erro no Cadastro"
                      });
                    });
              }
          });
        }
  },

  async create_user_doador (request, response) {
    const  {
      nome_usuario,
      email_usuario,
      senha_usuario,
    } = request.body;
    
    const dados = request.body;    

    const rows = await connection     
      .from("tbl_usuario")
      .select()
      . where({ 
        email_usuario: request.body.email_usuario
        })
      
        if(rows.length > 0 ){
          response.json({
            mensagem: "email Já cadastrado"
          });
          console.log({
            rows, 
            mensagem: "Email em uso"});
        } else {
          await bcrypt.hash(request.body.senha_usuario, 10,(errBcrypt, hash) => {
            if(errBcrypt){
              return response.status(500).json({
                error: errBcrypt,
                Mensagem: "Erro na Senha"
              });
            } else {
              connection.insert({
                nome_usuario, 
                email_usuario,
                senha_usuario: hash,
                perfil_usuario: 2
                }).into('tbl_usuario').then(data =>{
                  //console.log(resultadoInsert);
                  return response.json({
                    mensagem: 'Usuario Cadastrado com Sucesso',
                      //dados: data.nome_usuario,
                      usuarioCriado: {
                      Nome_Usuário: request.body.nome_usuario,    
                      //Senha_Usuário: hash,     
                      }
                    });
                  }).catch(err => {
                      console.log(err);
                      return response.json({
                        Mensagem: "Erro no Cadastro"
                      });
                    });
              }
          });
        }
  },
}