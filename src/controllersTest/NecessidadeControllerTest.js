const expres = require('express');
const connection = require ('../database/connection');

const crypto = require ('crypto');
const { innerJoin } = require('../database/connection');

module.exports = {

  async necessidadeGeral (request, response){

    try {
      const necessidade = await connection('tbl_necessidade').select('*')  
        console.log("Lista de Necessidade")
        return response.json(necessidade);
    } catch (error) {
      console.log(error, "Parametros não encontrados")
      
      return response.json({
        Mensagem: "Parametros não encontrados"
      })

    }
  },

  async resumo (request, response){

    try {
    
      const resumo = await connection('tbl_necessidade')
      .innerJoin('tbl_endereco',
              'tbl_endereco.id_endereco', 
                  '=', 
                    'tbl_necessidade.endereco')
                     
      .select([
        'tbl_necessidade.id_necessidade', 
        'tbl_necessidade.descricao', 
        'tbl_endereco.cidade',
        //'tbl_usuario.nome'
      ])

      return response.json(resumo);

    } catch (error) {
      console.log(error, "Parametros não encontrados")
      
      return response.json({
        Mensagem: "Parametros não encontrados"
      })

    }
  },


  async necessidadeDoacao (request, response){

    try {
    
      const resumo = await connection('tbl_necessidade')
      .join('tbl_usuario',  'tbl_usuario.id_usuario', '=', 'tbl_necessidade.usuario')
      .select([
        'tbl_necessidade.id_necessidade', 
        'tbl_necessidade.descricao', 
        'tbl_necessidade.situacao', 
        'tbl_necessidade.identificador', 
        'tbl_usuario.nome',
        'tbl_usuario.email',
        'tbl_usuario.cpf',
      ])

      return response.json(resumo);

    } catch (error) {
      console.log(error, "Parametros não encontrados")
      
      return response.json({
        Mensagem: "Parametros não encontrados"
      })

    }
  },


  async necessidadePorOng (request, response){
    const usuario_id = request.headers.authorization;

    try {
      const necessidade = await connection('tbl_necessidade')
      .where('usuario', usuario_id)
      .select('*');

      return response.json(necessidade);
      
    } catch (error) {
      console.log(error, "Erro na busca")
      return response.json({
        Mensagem: "Erro na busca"
      })
    }
    
  },

  async registraNecessidade (request, response) {
    const {
      descricao,
      cep,
      cidade,
      bairro,
      logadouro,
      ddd,
      numero,

      
    } = request.body
    
    //const token = request.headers.authorization;
    const usuario_id = request.headers.authorization;

    const user_id = usuario_id

    const id_identificador = crypto.randomBytes(2).toString('HEX');

    const identificador = id_identificador;

    try {

      const enderecoId = await connection('tbl_endereco').insert({
        cep,
        cidade,
        bairro,
        logadouro,
      })    
        
      const endereco_id = enderecoId[0];

      const conatoId = await connection('tbl_contato').insert({
        ddd,
        numero,
      })    

      const contato_id = conatoId[0];

      const [id, usuario_id] = await connection('tbl_necessidade').insert({
        descricao,
        situacao: "Não Atendida",
        identificador,
        usuario: user_id,
        endereco: endereco_id,
        contato: contato_id,

      })

        console.log("Necessidade Cadastrada com Sucesso")
        return response.json({ identificador })

    } catch ( error) {
      console.log(error, "Erro no cadastro")
      return response.json({
        Mensagem: "Erro no cadastro"
      })
    }
  },

  async deletaNecessidade (request, response) {
    const {id} = request.params;
    const usuario_id = request.headers.authorization;

    const necessidade = await connection('tbl_necessidade')
    .where('id_necessidade', id)
    .select('usuario')
    .first();

    if(necessidade.usuario != usuario_id){
      return response.status(401).json({
        error: "Operation not permeitted"
      })
    }
    await connection('tbl_necessidade').where('id_necessidade', id).delete();
    console.log("Deletado com Sucesso")
    return response.status(204).send();
  },


  async recebeDoacao (request, response) {
    const {id} = request.params;
    const usuario_id = request.headers.authorization;

  try{
    const alteracao = await connection('tbl_necessidade')
    .where('id_necessidade', id)
    .update('situacao', 'Atendida');    

    if(alteracao){
      console.log("Necessidade Atendida")
      return response.json(alteracao)
    } else {
      console.log("Deu Erro")
      
    }

    } catch(error){
      console.log(error, "Erro na alteração")
      return response.json({
        Mensagem: "Erro na alteração"
      })
    }
  },

  async BuscaPorID (request, response) {
    const {id} = request.params;
    const usuario_id = request.headers.authorization;
 
    try {
      const necessidade = await connection('tbl_necessidade')
      .where('id_necessidade', id)
      .select('*');

      return response.json(necessidade);
      
    } catch (error) {
      console.log(error, "Erro na busca")
      return response.json({
        Mensagem: "Erro na busca"
      })
    }
  },

}