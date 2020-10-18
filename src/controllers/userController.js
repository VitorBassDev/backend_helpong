const bcrypt = require ('bcrypt');
module.exports = {

  select_user (request, response) {
  const resposta =  {
    mensagem : "Get_User - Cheguei Aqui"
  }
    console.log(resposta) 

  return response.json(resposta);
  },

  create_user_ong (request, response) {
    const data =  request.body;

    bcrypt.hash(data.senha, 10,(errBcrypt, hash) => {
      if(errBcrypt){
          return res.status(500).json({
            Mensagem: "Erro na criptografia",
            error: errBcrypt});
        }
        else {
          const dados = {
            nome: data.nome,
            email: data.email,
            senha: hash,
          }
          return response.json({
            dados,
          })
        } 
    }); 
  },
  create_user_doador (request, response) {
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