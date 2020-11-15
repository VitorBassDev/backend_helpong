require('dotenv/config');
const connection = require ('../database/connection');
const bcrypt      = require('bcrypt');
const jwt         = require('jsonwebtoken');

module.exports = {

  /** 
   * ONG
   * LOGIN COM EMAIL E SENHA */

  async authOng (request, response){

    const {
      email,
      senha_usuario
    } = request.body;
      
      try {
        const usuario = await connection('tbl_usuario')
        .where('email', email)
        .whereRaw('perfil = ?', 1)
        .select('*')
        .first();
  
        if(!usuario){
          console.log("Ong não encontrada");
          return response.status(400).json({
             Error: 'Ong não encontrada'
          })
        } else {
  
          const match = await bcrypt.compare(senha_usuario, usuario.senha);
            if(match) {
              console.log('Granted! Senha Verificada', usuario.nome);
              const token = jwt.sign({
                id: usuario.id_usuario
              }, process.env.PORT_BACKEND, {
                expiresIn: "1h"
                });
                console.log(token)
                return response.status(200).json({
                  Mensagem: "Autenticado com Sucesso",
                  usuario, token
                });
  
            } else {
  
              console.log('Access Denied');
              return response.status(400).json({
                error: 'Acesso Negado'
              })
            }
        }
   
      } catch (error) {
        console.log(error);
        return response.json({
          Mensagem: "Erro na Busca - Catch"
        })
      }
    },
  /** ------------------------------------------------------------------------------------------- */

  /** 
   * DOADOR
   * LOGIN COM EMAIL E SENHA */
  async authDoador (request, response){

    const {
      email,
      senha_usuario
    } = request.body;
      
      try {
        const usuario = await connection('tbl_usuario')
        .where('email', email)
        .whereRaw('perfil = ?', 2)
        .select('*')
        .first();
  
        if(!usuario){
          console.log("Ong não encontrada");
          return response.status(400).json({
             Error: 'Ong não encontrada'
          })
        } else {
  
        const match = await bcrypt.compare(senha_usuario, usuario.senha);
          if(match) {
            console.log('Granted! Senha Verificada', usuario.nome);
            const token = jwt.sign({
              id: usuario.id_usuario
            }, "segredo", {
              expiresIn: "1h"
              });
              console.log(token)
                return response.status(200).json({
                  Mensagem: "Autenticado com Sucesso",
                  token, usuario
                });

          } else {

            console.log('Access Denied');
            return response.status(400).json({
              error: 'Acesso Negado'
            })
          }        
        }
      } catch (error) {
        console.log(error);
        return response.json({
          Mensagem: "Erro na Busca - Catch"
        })
      }
  },
  /** ------------------------------------------------------------------------------------------- */
  /** 
   * DOADOR
   * LOGIN COM EMAIL E SENHA */
  async authAdministrador (request, response){

    const {
      email,
      senha_usuario
    } = request.body;
      
      try {
        const usuario = await connection('tbl_usuario')
        .where('email', email)
        .whereRaw('perfil = ?', 2)
        .select('*')
        .first();
  
        if(!usuario){
          console.log("Ong não encontrada");
          return response.status(400).json({
             Error: 'Ong não encontrada'
          })
        } else {
  
        const match = await bcrypt.compare(senha_usuario, usuario.senha);
          if(match) {
            console.log('Granted! Senha Verificada', usuario.nome);
            const token = jwt.sign({
              id: usuario.id_usuario
            }, "segredo", {
              expiresIn: "1h"
              });
              console.log(token)
                return response.status(200).json({
                  Mensagem: "Autenticado com Sucesso",
                  token, usuario
                });

          } else {

            console.log('Access Denied');
            return response.status(400).json({
              error: 'Acesso Negado'
            })
          }        
        }
      } catch (error) {
        console.log(error);
        return response.json({
          Mensagem: "Erro na Busca - Catch"
        })
      }
  },
  /** ------------------------------------------------------------------------------------------- */

  /** LOGIN COM CPF */
  async loginCpf (request, response){

    const {cpf} = request.body;

    try {
      const usuario = await connection('tbl_usuario')
      .where('cpf', cpf)
      .select('nome', 'id_usuario')
      .first();

      if(!usuario){
        console.log("Erro na Busca");
        return response.status(400).json({
           Error: 'Ong não encontrada'
        })
      }
      console.log(usuario);
      return response.json(usuario)
    

    } catch (error) {
      console.log(error);
      return response.json({
        Mensagem: "Erro na Busca"
      })
    }   
  },
  /** ------------------------------------------------------------------------------------------- */
}