const bcrypt = require ('bcrypt');
const expres = require('express');
const connection = require ('../database/connection');

module.exports = {

  async listarUsuario (request, response){

    try {
      const usuario = await connection('tbl_usuario').select('*')  
        console.log("Lista de Usuários")
        return response.json(usuario);
    } catch (error) {
      console.log(error, "Parametros não encontrados")
      
      return response.json({
        Mensagem: "Parametros não encontrados"
      })

    }
  },

  async criarOng (request, response) {
    const {
      nome,
      email,
      senha,
      cpf
    } = request.body

    const saltRounds = 10;
    const senhaCrip = await bcrypt.hash(request.body.senha, saltRounds);

    try {
      
      await connection('tbl_usuario').insert({
        nome,
        email,
        senha: senhaCrip,
        cpf,
        perfil: 1
      })          
        console.log(senhaCrip)
        return response.json({cpf})
    } catch ( error) {
      console.log(error, "Erro no cadastro da ONG")
      return response.json({
        Mensagem: "Erro no cadastro da ONG"
      })
    }
  },

  async criarDoador (request, response) {
    const {
      nome,
      email,
      senha,
      cpf
    } = request.body

    const saltRounds = 10;
    const senhaCrip = await bcrypt.hash(request.body.senha, saltRounds);
  
    try {
      await connection('tbl_usuario').insert({
        nome,
        email,
        senha: senhaCrip,
        cpf,
        perfil: 2
      })
        console.log("Cadastro de ONG")
        return response.json({cpf})
    } catch (error) {
      console.log(error, "Erro no cadastro da ONG")
      return response.json({
        Mensagem: "Erro no cadastro da ONG"
      });
    }
  },
}