'use strict'

const User = use('App/Models/User')
const Database = use('Database')
const Handler = use('App/Exceptions/Handler')

class RolController {

    async listarPermiso({}){
        const res = await Database.raw('SELECT * FROM listarPermiso()')
        const jsonData = JSON.parse(JSON.stringify(res.rows));
        return jsonData
    };

    async listarPermisoById({params}){

        const id = parseInt(params.id);
        const res = await Database.raw('SELECT * FROM listarPermisoById(?)',[id])
        const jsonData = JSON.parse(JSON.stringify(res.rows));
        const objRol = jsonData[0]
        return objRol
   
    };

    async agregarPermiso({request}){
        try {
            const {id_rol,id_modulo}=request.all();
            const res = await Database.raw('SELECT * FROM agregarPermiso(?,?)',[id_rol,id_modulo])
            const jsonData = JSON.parse(JSON.stringify(res.rows));
            const objRol = jsonData[0]

            const id_permiso=objRol.agregarrol;
            
            return {
                result  : 1,
                message : "successful",
                id_permiso : id_permiso
            }
        } catch (e) {
            return {
                result  : 0,
                message : e
            }
        }  
    };

    async actualizarPermiso({params,request}){
        try {
            const id = parseInt(params.id);
            const {rol}=request.all();
            const res = await Database.raw('SELECT actualizarRol(?,?)', [rol,id])
            return {
                result  : 1,
                message : "successful",
            }
        } catch (e) {
            return {
                result  : 0,
                message : e
            }
        }
    };

    async eliminarPermiso({params,response}){

        const id = parseInt(params.id);
        const resultado = await Database.raw('SELECT eliminarPermiso(?)', [id])
        const jsonData = JSON.parse(JSON.stringify(resultado.rows));
        const objUsuario = jsonData[0]

        var message="successful"

        if (objUsuario.eliminarpermiso===0){
            message="Error al Desactivar Registro Nro : " + id
        }

        const objetoResult={
            result  : objUsuario.eliminarpermiso,
            message :   message
            }

        return objetoResult
};




}

module.exports = RolController
