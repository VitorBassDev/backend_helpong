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

    await bcrypt.hash(request.body.senha_usuario, 10,(errBcrypt, hash) => {
      if(errBcrypt){
        return res.status(500).json({
          error: errBcrypt,
          Mensagem: "Erro na Senha"
        });
      } else {
        connection.insert({
          nome_usuario, 
          email_usuario,
          senha_usuario: hash,
          perfil_usuario: 1
          }).into('tbl_usuario').then(data =>{
            return response.json({
              mensagem: 'Usuario Cadastrado com Sucesso',
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
  },

  async create_user_doador (request, response) {
    const  {
      nome_usuario,
      email_usuario,
      senha_usuario,
    } = request.body;

    const dados = request.body;    

    await bcrypt.hash(request.body.senha_usuario, 10,(errBcrypt, hash) => {
      if(errBcrypt){
        return res.status(500).json({
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
            return response.json({
              mensagem: 'Usuario Cadastrado com Sucesso',
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
  },

  create_user_test (request, response) {
    const resposta =  [request.body.nome, request.body.email, request.body.senha]

    bcrypt.hash(request.body.senha, 10,(errBcrypt, hash) => {
      if(errBcrypt){
          return res.status(500).send({error: errBcrypt});
        }
        else {
          const dados ={
              nome: request.body.nome,
              email: request.body.email,
          }
            return response.send({
              Informativo: 'Perfil Doador Senha Criptografada',
              dados: `Senha`, dados,
              senha: hash
            });
        } 
    }); 
  },
}