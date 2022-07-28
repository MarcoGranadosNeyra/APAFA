'use strict'


const Database = use('Database')

class EspecialidadController {

    async listarEspecialidad(){

        const res = await Database.raw('SELECT * FROM listarEspecialidad()')
        const jsonData = JSON.parse(JSON.stringify(res.rows));
        return jsonData
        
    };

    async listarEspecialidadById({params}){
        const id = parseInt(params.id);
        const res = await Database.raw('SELECT * FROM listarEspecialidadById(?)',[id])
        const jsonData = JSON.parse(JSON.stringify(res.rows));
        const objEspecialidad = jsonData[0]
        return objEspecialidad

    };

    async agregarEspecialidad({request}){
        try {
            const {especialidad,descripcion,imagen}=request.all();
            const res = await Database.raw('SELECT agregarEspecialidad(?,?,?)', [especialidad,descripcion,imagen])
            
            return {
                result  : 1,
                message : "successful"
            }
        } catch (e) {
            return {
                result  : 0,
                message : e
            }
        }  
    };

    async actualizarEspecialidad({params,request}){
        try {
            const id = parseInt(params.id);
            const {especialidad,descripcion,imagen}=request.all();
            
            const res = await Database.raw('SELECT actualizarEspecialidad(?,?,?,?)', [especialidad,descripcion,imagen,id])
            
            return {
                result  : 1,
                message : "successful"
            }
        } catch (e) {
            return {
                result  : 0,
                message : e
            }
        }  
    };

    async eliminarEspecialidad({params}){

        const id = parseInt(params.id);
        const resultado = await Database.raw('SELECT eliminarEspecialidad(?)', [id])
        const jsonData = JSON.parse(JSON.stringify(resultado.rows));
        const objEspecialidad = jsonData[0]

        var message="successful"

        if (objEspecialidad.eliminarespecialidad===0){
            message="Error al Eliminar Registro Nro : " + id
        }

        const objetoResult={
            result  : objEspecialidad.eliminarespecialidad,
            message :   message
            }

        return objetoResult
};

}

module.exports = EspecialidadController
