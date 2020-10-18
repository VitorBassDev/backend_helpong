

module.exports = {
  index (request, response) {
  const resposta =  {
    mensagem : "Cheguei Aqui"
  }
    console.log(resposta) 

  return response.json(resposta);
  },
}