'use strict'

const Database = use('Database')

class IngresoController {

    async listarIngresos({request}){

        const {fecha1,fecha2}=request.all();
         const res = await Database.raw('SELECT * FROM listarIngresos(?,?)',[fecha1,fecha2])
        const jsonData = JSON.parse(JSON.stringify(res.rows));
        return jsonData
    
    };


}

module.exports = IngresoController
