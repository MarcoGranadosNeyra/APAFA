'use strict'

const User = use('App/Models/User')
const Database = use('Database')
const Handler = use('App/Exceptions/Handler')

class RolModuloController {

    async listarModulo({}){
        const res = await Database.raw('SELECT * FROM listarModulo()')
        const jsonData = JSON.parse(JSON.stringify(res.rows));
        return jsonData
    };

    async agregarRolModulo({request}){

        try {
            const {id_rol,id_modulo}=request.all();
            
            const res = await Database.raw('SELECT agregarRolModulo(?,?)', [id_rol,id_modulo])
            const jsonData = JSON.parse(JSON.stringify(res.rows));
            const objPersona = jsonData[0]

            const id_rol_modulo=objPersona.agregarrolmodulo;
            
            return {
                result  : 1,
                message : "successful",
                id_rol_modulo : id_rol_modulo
            }
        } catch (e) {
            return {
                result  : 0,
                message : e
            }
        }  
    };


}

module.exports = RolModuloController
