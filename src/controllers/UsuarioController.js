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

        console.log({
          Mensagem: "Usuário Criado com Sucesso", 
          Nome: nome
        })
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
        perfil: 4
      })                

        console.log(nome)
        return response.json({identificador})

    } catch ( error) {

      console.log(error, "Erro no cadastro da ONG")

      return response.json({
        Mensagem: "Erro no cadastro da ONG"
      })
    }
  
  },

  async criarAdministrador (request, response) {
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
        return response.json({identificador})

    } catch ( error) {

      console.log(error, "Erro no cadastro de Administrador")

      return response.json({
        Mensagem: "Erro no cadastro de Administrador"
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

  async deletaUsuario(request, response) {
    const {id} = request.params;
    const usuario_id = request.headers.authorization;

    try {
      const necessidade = await connection('tbl_usuario')
      .where('id_usuario', id)
      .select('id_usuario')
      .first();
  
      const resposta = await connection('tbl_usuario').where('id_usuario', id).delete();
  
      if(resposta){
        console.log(`Usuário ${id} deletado com sucesso`);
        return response.status(204).json({
          Mensagem:`Usuário ${id} deletado com sucesso`
        });      
  
      } else{
        return response.status(401).json({
          error: "Erro ao deletar"
        })
      }
    } catch (error) {
      console.log(error)
      return response.status(401).json({
        error: "Algo deu errado"
      })
    }   
  },
}