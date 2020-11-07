const bcrypt = require ('bcrypt');
const expres = require('express');

const crypto = require ('crypto');


const connection = require ('../database/connection');
const { resumo } = require('./NecessidadeControllerTest');

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
    } = request.body

    // CRIPTOGRAFAR SENHA
    const saltRounds = 10;
    const senhaCrip = await bcrypt.hash(request.body.senha, saltRounds);

    // GERAR NÚMERO Automático
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
      cpf,
    } = request.body

    // CRIPTOGRAFAR SENHA
    const saltRounds = 10;
    const senhaCrip = await bcrypt.hash(request.body.senha, saltRounds);

    // GERAR NÚMERO Automático
    const id_identificador = crypto.randomBytes(2).toString('HEX');
    const identificador = id_identificador;

    try {     
      const usuarioId = await connection('tbl_usuario').insert({
        nome,
        email,
        senha: senhaCrip,
        cpf,
        identificador,
        perfil: 2
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

  async editarUsuario (request, response){
    const {
      nome,
      email,
      cpf,
    } = request.body

    //const {id} = request.params;
    const usuario_id = request.headers.authorization;

    try {
    const {id_usuario} = await connection('tbl_usuario')
    .where('id_usuario', usuario_id)
    .select('*')
    .first();
  
    const idUser = id_usuario

    const resultado = await connection('tbl_usuario')
    .where('id_usuario', idUser)
    .update({
      'email': email,
      'nome':nome,
      'cpf': cpf});

    return response.json(resultado)


    } catch (error) {
      console.log(error, "Parametros não encontrados")
      
      return response.json({
        Mensagem: "Parametros não encontrados"
      })

    }
  },

  async editarUsuarioNovo (request, response){
    const {
      nome,
      email,
      cpf,
    } = request.body

    //const {id} = request.params;
    const usuario_id = request.headers.authorization;

    try {

    const resultado = await connection('tbl_usuario')
    .where('id_usuario', usuario_id)
    .update({
      'email': email,
      'nome':nome,
      'cpf': cpf});

      console.log("Alteração de usuário")
      return response.json(resultado)
    


    } catch (error) {
      console.log(error, "Parametros não encontrados")
      
      return response.json({
        Mensagem: "Parametros não encontrados"
      })

    }
  },


  async buscarUsuario (request, response){
    const {
      acesso,
      nome,
      email,
      cpf,
    } = request.body

    //const {id} = request.params;
    const usuario_id = request.headers.authorization;

    try {
      const resultado = await connection('tbl_usuario')
        .where('id_usuario', acesso)
        .select('*')
        .first();
    
       return response.json(resultado)

    } catch (error) {
      console.log(error, "Parametros não encontrados")
      
      return response.json({
        Mensagem: "Parametros não encontrados"
      })

    }
  },
}