'use strict'

const Database = use('Database')

class EventoController {

    async listarEvento({request}){

        const {fecha1,fecha2}=request.all();
         const res = await Database.raw('SELECT * FROM listarEvento(?,?)',[fecha1,fecha2])
        const jsonData = JSON.parse(JSON.stringify(res.rows));
        return jsonData
    
    };





}

module.exports = EventoController
