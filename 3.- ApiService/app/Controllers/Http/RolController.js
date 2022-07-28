'use strict'

const User = use('App/Models/User')
const Database = use('Database')
const Handler = use('App/Exceptions/Handler')

class RolController {

    async listarRol({}){
        const res = await Database.raw('SELECT * FROM listarRol()')
        const jsonData = JSON.parse(JSON.stringify(res.rows));
        return jsonData
    };

    async listarRolById({params}){

        const id = parseInt(params.id);
        const res = await Database.raw('SELECT * FROM listarRolById(?)',[id])
        const jsonData = JSON.parse(JSON.stringify(res.rows));
        const objRol = jsonData[0]
        return objRol
   
    };

    async agregarRol({request}){

        try {
            const {rol}=request.all();
            const res = await Database.raw('SELECT * FROM agregarRol(?)',[rol])
            const jsonData = JSON.parse(JSON.stringify(res.rows));
            const objRol = jsonData[0]

            const id_rol=objRol.agregarrol;
            
            return {
                result  : 1,
                message : "successful",
                id_rol : id_rol
            }
        } catch (e) {
            return {
                result  : 0,
                message : e
            }
        }
        
    };

    async actualizarRol({params,request}){
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

    async eliminarRol({params}){

        const id = parseInt(params.id);

        const resultado = await Database.raw('SELECT eliminarRol(?)', [id])
        const jsonData = JSON.parse(JSON.stringify(resultado.rows));
        const objDetalle = jsonData[0]

        var message="successful"

        if (objDetalle.eliminarrol===0){
            message="Error al Eliminar Registro Nro : " + id
        }

        const objetoResult={
            result  : objDetalle.eliminarrol,
            message :   message
            }

        return objetoResult
};

    async listarRolDetalle({params}){
        const id_rol = parseInt(params.id);
        const res = await Database.raw('SELECT * FROM listarRolDetalle(?)',[id_rol])
        const jsonData = JSON.parse(JSON.stringify(res.rows));
        return jsonData
    };

    async eliminarRolDetalle({params}){

        const id = parseInt(params.id);

        const resultado = await Database.raw('SELECT eliminarRolDetalle(?)', [id])
        const jsonData = JSON.parse(JSON.stringify(resultado.rows));
        const objDetalle = jsonData[0]

        var message="successful"

        if (objDetalle.eliminarroldetalle===0){
            message="Error al Eliminar Registro Nro : " + id
        }

        const objetoResult={
            result  : objDetalle.eliminarroldetalle,
            message :   message
            }

        return objetoResult
};




}

module.exports = RolController
