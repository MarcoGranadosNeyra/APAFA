'use strict'

const User = use('App/Models/User')
const Database = use('Database')
const Handler = use('App/Exceptions/Handler')

class ExamenController {

    async listarExamenById({params}){

        const id_examen = parseInt(params.id);
        const res = await Database.raw('SELECT * FROM listarExamenById(?)',[id_examen])
        const jsonData = JSON.parse(JSON.stringify(res.rows));
        const objExamen = jsonData[0]
        return objExamen
    };

    async listarExamenByIdEspecialidad({params}){

        const id_especialidad = parseInt(params.id);
        const res = await Database.raw('SELECT * FROM listarExamenByIdEspecialidad(?)',[id_especialidad])
        return res.rows
    };


}

module.exports = ExamenController
