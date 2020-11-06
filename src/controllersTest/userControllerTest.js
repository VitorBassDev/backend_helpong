const bcrypt = require ('bcrypt');
const expres = require('express');

const crypto = require ('crypto');


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
      cpf,
      cep,
      cidade,
      bairro,
      logadouro,
    } = request.body

    const saltRounds = 10;
    const senhaCrip = await bcrypt.hash(request.body.senha, saltRounds);

    const id_identificador = crypto.randomBytes(2).toString('HEX');

    const identificador = id_identificador;

    try {     

      const usuarioId = await connection('tbl_usuario').insert({
        nome,
        email,
        senha: senhaCrip,
        cpf,
        identificador,
        perfil: 1
      })                

        console.log(nome)
        return response.json({email})
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