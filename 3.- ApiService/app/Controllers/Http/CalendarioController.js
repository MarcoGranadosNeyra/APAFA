'use strict'

const Database = use('Database')

class CalendarioController {

    async listarCalendario(){

        const res = await Database.raw('SELECT * FROM listarCalendario()')
        const jsonData = JSON.parse(JSON.stringify(res.rows));
        return jsonData

    };

    async listarCalendarioById({params}){
       
        const id = parseInt(params.id);
        const res = await Database.raw('SELECT * FROM listarCalendarioById(?)', [id])
        const jsonData = JSON.parse(JSON.stringify(res.rows));
        const objCalendario = jsonData[0]
        return objCalendario
        
    };


    async agregarCalendario({request}){

        try {

        const {id_medico,id_dia,id_hora}=request.all();
      
        const res = await Database.raw('SELECT agregarCalendario(?,?,?)', [id_medico,id_dia,id_hora])

        return {
            message : 1
        }
 
        } catch (e) {
            return {
                message : 0,
                error : e
            }
        }  
    };

    async activarCalendario({params,response}){

            const id = parseInt(params.id);
            const resultado = await Database.raw('SELECT activarCalendario(?)', [id])
            const jsonData = JSON.parse(JSON.stringify(resultado.rows));
            const objUsuario = jsonData[0]

            var message="successful"

            if (objUsuario.activarcalendario===0){
                message="Error al Desactivar Registro Nro : " + id
            }

            const objetoResult={
                result  : objUsuario.activarcalendario,
                message :   message
                }

            return objetoResult
    };

    async desactivarCalendario({params,response}){

            const id = parseInt(params.id);
            const resultado = await Database.raw('SELECT desactivarCalendario(?)', [id])
            const jsonData = JSON.parse(JSON.stringify(resultado.rows));
            const objUsuario = jsonData[0]

            var message="successful"

            if (objUsuario.desactivarcalendario===0){
                message="Error al Desactivar Registro Nro : " + id
            }

            const objetoResult={
                result  : objUsuario.desactivarcalendario,
                message :   message
                }

            return objetoResult
    };


    async listarCalendarioByIdEspecialidad({response,request}){
       
        const {id_especialidad,id_dia}=request.all();
        const res = await Database.raw('SELECT * FROM listarCalendarioByIdEspecialidad(?,?)', [id_especialidad,id_dia])
        const jsonData = JSON.parse(JSON.stringify(res.rows));
        return jsonData
};

}

module.exports = CalendarioController
