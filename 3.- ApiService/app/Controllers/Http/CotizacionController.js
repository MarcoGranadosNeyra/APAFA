'use strict'

const Database = use('Database')

class CotizacionController {

    async listarCotizacion({request}){

        const {fecha1,fecha2}=request.all();
         const res = await Database.raw('SELECT * FROM listarCotizacion(?,?)',[fecha1,fecha2])
        const jsonData = JSON.parse(JSON.stringify(res.rows));
        return jsonData
    
    };

    async listarMedicoById({params}){

        const id = parseInt(params.id);
        const res = await Database.raw('SELECT * FROM listarMedicoById(?)',[id])
        const jsonData = JSON.parse(JSON.stringify(res.rows));
        const objSucursal = jsonData[0]
        return objSucursal
   
    };

async agregarMedico({request}){
    
    try {
        const {id_persona,id_especialidad,especialista,colegiatura}=request.all();
        const res = await Database.raw('SELECT agregarMedico(?,?,?,?)', [id_persona,id_especialidad,especialista,colegiatura])
        
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

async actualizarMedico({params,request}){
    try {
        const id = parseInt(params.id);
        const {id_persona,id_especialidad,especialista,colegiatura}=request.all();
        const res = await Database.raw('SELECT actualizarMedico(?,?,?,?,?)', [id_persona,id_especialidad,especialista,colegiatura,id])
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

async eliminarMedico({params,response}){
   
        const id = parseInt(params.id);
        const resultado = await Database.raw('SELECT eliminarMedico(?)', [id])
        const jsonData = JSON.parse(JSON.stringify(resultado.rows));
        const objMedico = jsonData[0]

        var message="successful"

        if (objMedico.eliminarmedico===0){
            message="Error al Eliminar Registro Nro : " + id
        }

        const objetoResult={
            result  : objMedico.eliminarmedico,
            message :   message
        }

        return objetoResult
};




}

module.exports = CotizacionController
