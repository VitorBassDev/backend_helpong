const bcrypt = require ('bcrypt');
module.exports = {
  auth_ong (request, response) {
  const resposta =  {
    mensagem : "Get_User - Cheguei Aqui"
  }
    console.log(resposta) 

  return response.json(resposta);
  },

  auth_doador (request, response) {
    const resposta =  {
      mensagem : "Get_User - Cheguei Aqui"
    }
      console.log(resposta) 
  
    return response.json(resposta);
  },
}